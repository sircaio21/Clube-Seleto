import React, { CreateContext, createContext, useContext, useState } from "react";
import { setSettings } from "../utils/settings"
import _ from "lodash"
export const SettingsContext = createContext();

const defaultSettings = {
    darkMode: false,
}

export function SettingsProvider({ settings, children }) {
    const [currentSettings, setCurrentSettings] = useState(settings || defaultSettings)

    const handleSave = (newSettings) => {
        const mergedSettings = _.merge({}, currentSettings, newSettings)
        setCurrentSettings(mergedSettings);
        setSettings(mergedSettings);
    };
    return (
        <SettingsContext.Provider
            value={{
                settings: currentSettings,
                saveSettings: handleSave,
            }}
        >
            {children}
        </SettingsContext.Provider>

    )
}

export function useSettings() {
    const context = useContext(SettingsContext)
    return context;

}