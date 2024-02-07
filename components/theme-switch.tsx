"use client";

import { FC } from "react";
import { Switch, SwitchProps } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
export interface ThemeSwitchProps {
    className?: string;
    classNames?: SwitchProps["classNames"];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
    className,
    classNames,
}) => {
    const { theme, setTheme } = useTheme();
    const isSSR = useIsSSR();

    const onChange = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    return (
        <Switch
            className={className}
            classNames={{wrapper:"rounded-sm ",thumb:"rounded-sm bg-black dark:bg-white" }}
            defaultSelected={theme === "light" || isSSR}
            onChange={onChange}
            size="md"

            startContent={<SunIcon />}
            endContent={<MoonIcon />}
            color="default"
			aria-label={`Switch to ${theme === "light" || isSSR ? "dark" : "light"} mode`}
        >
        </Switch>
    );
};