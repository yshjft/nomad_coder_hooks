export const useTabs = (initialTab, allTabs) => {
    if (!allTabs || !Array.isArray(allTabs)) {
      return;
    }
    const [currentIndex, setCurrentInedx] = useState(initialTab);
    return {
      currentItem: allTabs[currentIndex],
      changeItem: setCurrentInedx
    };
  };