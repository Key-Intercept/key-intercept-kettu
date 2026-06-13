export const state = {
    config: null as any,
    droneConfig: null as any,
    rules: [] as any[],
    whitelist: [] as any[],
    petWords: [] as string[],
    censoredWords: [] as string[]
};

const SUPABASE_URL = "https://qjzgfwithyvmwctesnqs.supabase.co/rest/v1";
const SUPABASE_KEY = "sb_publishable_cxq8QZp9BDtjE4G5qiPCFA_lUZ4Cbdh";

async function sbFetch(path: string, options: RequestInit = {}) {
    try {
        const res = await fetch(`${SUPABASE_URL}${path}`, {
            ...options,
            headers: {
                "apikey": SUPABASE_KEY,
                "Authorization": `Bearer ${SUPABASE_KEY}`,
                "Content-Type": "application/json",
                "Prefer": "return=representation",
                ...(options.headers || {})
            }
        });
        if (!res.ok) {
            console.log(`[key-intercept] DB Error on ${path}:`, await res.text());
            return null;
        }
        return await res.json();
    } catch (e) {
        console.log(`[key-intercept] Network fetch failed:`, String(e));
        return null;
    }
}

export async function loadDatabase(userID: string, username: string) {
    let profiles = await sbFetch(`/profiles?discord_id=eq.${userID}`);
    if (!profiles || profiles.length === 0) {
        profiles = await sbFetch(`/profiles`, {
            method: "POST",
            body: JSON.stringify({ display_name: username, discord_id: userID })
        });
    }
    if (!profiles || profiles.length === 0) return;

    const subID = profiles[0].id;
    let subData = await sbFetch(`/Sub_Config_Access?sub_id=eq.${subID}`);
    
    if (!subData || subData.length === 0) {
        const newConfig = await sbFetch(`/Config`, { method: "POST", body: JSON.stringify({}) });
        const configId = newConfig[0].id;
        
        await sbFetch(`/Sub_Config_Access`, { method: "POST", body: JSON.stringify({ sub_id: subID, config_id: configId }) });
        await sbFetch(`/Drone_Config`, { method: "POST", body: JSON.stringify({
            config_id: configId,
            speech_header: "This Drone Says:",
            speech_footer: "It Obeys",
            action_header: "Drone::Action::Performs(",
            action_footer: ");",
            whisper_header: "Drone Initiating Quiet Mode",
            whisper_footer: "Normal Volume Restored",
            loud_header: "Volume.set(500);",
            loud_footer: "Volume.set(100)"
        })});
        subData = await sbFetch(`/Sub_Config_Access?sub_id=eq.${subID}`);
    }

    if (!subData || subData.length === 0) return;
    const configId = subData[0].config_id;

    const configRes = await sbFetch(`/Config?id=eq.${configId}`);
    if (configRes && configRes.length > 0) {
        state.config = configRes[0];
        state.config.rules_end = new Date(state.config.rules_end);
        state.config.gag_end = new Date(state.config.gag_end);
        state.config.pet_end = new Date(state.config.pet_end);
        state.config.bimbo_end = new Date(state.config.bimbo_end);
        state.config.horny_end = new Date(state.config.horny_end);
        state.config.drone_end = new Date(state.config.drone_end);
        state.config.uwu_end = new Date(state.config.uwu_end);
        state.config.censored_end = new Date(state.config.censored_end);
    }

    const rulesRes = await sbFetch(`/Rules?config_id=eq.${configId}&order=id.desc`);
    if (rulesRes) state.rules = rulesRes;

    const whitelistRes = await sbFetch(`/Server_Whitelist_Items?config_id=eq.${configId}`);
    if (whitelistRes) state.whitelist = whitelistRes;

    if (state.config?.pet_type) {
        const petsRes = await sbFetch(`/Pet_Type_Words?pet_type=eq.${state.config.pet_type}`);
        if (petsRes) state.petWords = petsRes.map((p: any) => p.word);
    }

    const censoredRes = await sbFetch(`/Censored_Words?config_id=eq.${configId}`);
    if (censoredRes) state.censoredWords = censoredRes.map((c: any) => c.word);

    const droneRes = await sbFetch(`/Drone_Config?config_id=eq.${configId}`);
    if (droneRes && droneRes.length > 0) state.droneConfig = droneRes[0];
}