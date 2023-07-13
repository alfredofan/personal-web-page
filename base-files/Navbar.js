const homeMatch = useMatch("/");

const [small, setSmall] = useState(false);

useEffect(() => {
  const scrollHandler = () => {
    setSmall(window.scrollY < 640);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", scrollHandler, { passive: true });
  }

  return () => {
    window.removeEventListener("scroll", scrollHandler, { passive: true });
  };
}, []);