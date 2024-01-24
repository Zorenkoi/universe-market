import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const useScrollHeader = () => {
  const searchParams = useSearchParams();
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    setShowHeader(true);
  }, [searchParams]);
  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 30) return true;

      // Проверяем, сколько прокрутили вниз или вверх
      const scrollingDown = currentScrollY > prevScrollY;

      // Определяем, нужно ли показывать или скрывать заголовок
      setShowHeader((prevShowHeader) => {
        // Показываем, если прокрутка вверх или на самом верху страницы
        if (!scrollingDown || currentScrollY === 0) {
          return true;
        }

        // Скрываем, если прокрутка вниз
        return false;
      });

      prevScrollY = currentScrollY;
    };

    // Добавляем обработчик событий при монтировании компонента
    window.addEventListener("scroll", handleScroll);

    // Удаляем обработчик событий при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return showHeader;
};

export default useScrollHeader;
