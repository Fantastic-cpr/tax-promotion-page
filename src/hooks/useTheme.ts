import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export function useTheme() {
  // 初始化时检查系统主题偏好，默认使用浅色主题避免黑白反转问题
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      return savedTheme;
    }
    // 默认返回浅色主题，避免自动切换到可能导致反转问题的深色模式
    return 'light';
  });

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // 额外提供设置为浅色主题的方法
  const setLightTheme = () => {
    setTheme('light');
  };

  // 额外提供设置为深色主题的方法
  const setDarkTheme = () => {
    setTheme('dark');
  };

  return {
    theme,
    toggleTheme,
    setLightTheme,
    setDarkTheme,
    isDark: theme === 'dark'
  };
} 