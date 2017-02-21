-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Фев 21 2017 г., 09:39
-- Версия сервера: 5.7.17-0ubuntu0.16.04.1
-- Версия PHP: 7.0.13-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `exsight`
--

-- --------------------------------------------------------

--
-- Структура таблицы `rt_tanks`
--

CREATE TABLE `rt_tanks` (
  `num` int(10) NOT NULL,
  `mass` float DEFAULT NULL,
  `volume` float DEFAULT NULL,
  `plot` float DEFAULT NULL,
  `temp` float DEFAULT NULL,
  `level` float DEFAULT NULL,
  `max_level` float DEFAULT NULL,
  `tempvapor` float DEFAULT NULL,
  `plotlab` float DEFAULT NULL,
  `templab` float DEFAULT NULL,
  `avlevel` float DEFAULT NULL,
  `signallevel` float DEFAULT NULL,
  `pereliv` float DEFAULT NULL,
  `product` float DEFAULT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `fixtime` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `rt_tanks`
--

INSERT INTO `rt_tanks` (`num`, `mass`, `volume`, `plot`, `temp`, `level`, `max_level`, `tempvapor`, `plotlab`, `templab`, `avlevel`, `signallevel`, `pereliv`, `product`, `datetime`, `fixtime`) VALUES
(1, 1920.2, 2544.9, 755.2, -50, 7529, 13200, 1.1, 755.2, 15, 14190, 12700, 0, 3, '2017-02-21 05:39:01', '21.02.2017 9:36:00'),
(2, 3414.8, 4507.6, 757.6, 1, 13283, 13500, 1, 747.5, 15, 14100, 13000, 0, 3, '2017-02-21 05:39:01', '21.02.2017 9:36:01'),
(3, 1535.3, 2068.8, 742.1, 0, 6064.8, 12900, 15, 742.1, 15, 14200, 12400, 0, 3, '2017-02-21 05:39:01', '21.02.2017 9:36:02'),
(4, 1952, 2637.9, 740, 0, 7792.7, 13200, 15, 740, 15, 14200, 12700, 0, 3, '2017-02-21 05:39:01', '21.02.2017 9:36:03'),
(5, 1197.4, 1589.9, 753.1, 34.3, 4642.6, 13250, 32, 768.9, 15, 13700, 12750, 0, 4, '2017-02-21 05:39:01', '21.02.2017 9:36:04'),
(6, 373.7, 498.3, 750, -50, 1486.9, 13200, 15, 750, 15, 13700, 12700, 0, 4, '2017-02-21 05:39:01', '21.02.2017 9:36:05'),
(7, 1884.4, 2484.4, 758.5, 0, 7259, 13100, 15, 739.8, 21.8, 13700, 12600, 0, 4, '2017-02-21 05:39:01', '21.02.2017 9:36:06'),
(8, 0, 0, 768.5, NULL, -1000, 9400, NULL, 768.5, 15, 9700, 8900, 0, 4, '2017-02-21 05:39:01', '21.02.2017 9:36:07'),
(9, 1923, 2280.5, 843.3, -1.2, 5736.1, 11100, 15, 831.5, 15, 11620, 10600, 0, 8, '2017-02-21 05:39:01', '21.02.2017 9:36:08'),
(10, 3709.5, 4419.8, 839.3, 6.6, 10870.1, 11100, 15, 833.2, 15, 11690, 10600, 0, 10, '2017-02-21 05:39:02', '21.02.2017 9:36:09'),
(11, 288.8, 339.8, 850, 0, 855.4, 10450, 15, 850, 15, 10880, 9950, 0, 9, '2017-02-21 05:39:02', '21.02.2017 9:36:10'),
(12, 3758.5, 4481.5, 838.7, 0.5, 11061.2, 11200, 15, 828, 15, 11610, 10700, 0, 8, '2017-02-21 05:39:02', '21.02.2017 9:36:11'),
(13, 3564.4, 4246.4, 839.4, 4.8, 10449.7, 11100, 15, 826.3, 22.5, 11620, 10600, 0, 7, '2017-02-21 05:39:02', '21.02.2017 9:36:12'),
(14, 457.5, 524.4, 872.5, -3.6, 1392.7, 10600, 0, 859.5, 15, 11660, 10100, 0, 9, '2017-02-21 05:38:03', '21.02.2017 9:35:13'),
(15, 3759.8, 4428.5, 849, 0, 10860.1, 11000, 15, 849, 15, 11600, 10500, 1, 10, '2017-02-21 05:38:03', '21.02.2017 9:35:14'),
(16, 0, 0, 844, NULL, -1000, 10400, NULL, 844, 15, 10700, 9900, 0, 10, '2017-02-21 05:38:03', '21.02.2017 9:35:15'),
(17, 250.8, 285.8, 877.6, 0, 743.4, 11250, 15, 877.6, 15, 11600, 10750, 0, 9, '2017-02-21 05:38:03', '21.02.2017 9:35:16'),
(18, 2073.4, 2439.4, 849.9, 1.3, 5972.5, 11100, 1.3, 840, 15, 11630, 10600, 0, 10, '2017-02-21 05:38:03', '21.02.2017 9:35:17'),
(19, 295.1, 348.8, 846, 3.5, 934.3, 10200, 5, 838, 15, 11180, 9700, 0, 10, '2017-02-21 05:38:03', '21.02.2017 9:35:18'),
(20, 0, 0, 867.3, -50, -1000, 13250, NULL, 867.3, 15, 14300, 12750, 0, 9, '2017-02-21 05:38:03', '21.02.2017 9:35:19'),
(51, 472.7, 629.2, 751.3, -2.8, 7368.4, 8080, 1.1, 731.7, 20, 8320, 7580, 0, 3, '2017-02-21 05:38:03', '21.02.2017 9:35:20'),
(52, 452.2, 587.4, 769.7, -3.4, 6885, 8050, 0.8, 750, 20, 8320, 7550, 0, 4, '2017-02-21 05:38:04', '21.02.2017 9:35:21'),
(53, 282.5, 340, 831, -9.7, 3980.7, 8020, 15, 812.4, 15, 8310, 7550, 0, 7, '2017-02-21 05:38:04', '21.02.2017 9:35:22'),
(54, 454.1, 545.1, 833, -50, 6361.2, 8020, 15, 833, 15, 8260, 7200, 0, 0, '2017-02-21 05:38:04', '21.02.2017 9:35:23'),
(55, 164.8, 217.1, 759.4, -4.4, 2525.4, 8040, 15, 743, 15, 8260, 7540, 0, 11, '2017-02-21 05:38:04', '21.02.2017 9:35:24'),
(56, 460, 623.9, 737.2, -4.5, 7282.9, 7400, 15, 720, 15, 8270, 6900, 0, 3, '2017-02-21 05:38:04', '21.02.2017 9:35:25'),
(69, 23, 29.7, 774.3, -0.8, 32.6, 11100, 15, 757, 20, 11610, 10600, 0, 3, '2017-02-21 05:38:04', '21.02.2017 9:35:26'),
(70, 0, 0, 763, -0.4, 0, 11000, -0.4, 750, 15, 11620, 10500, 0, 3, '2017-02-21 05:38:04', '21.02.2017 9:35:27'),
(71, 17.5, 23.6, 740.2, 0, 0, 11230, -0.8, 727.2, 15, 11630, 10730, 0, 3, '2017-02-21 05:38:04', '21.02.2017 9:35:28'),
(72, 4.5, 6, 753.1, -1.3, 41, 11200, 0, 739.2, 15, 11610, 10700, 0, 3, '2017-02-21 05:38:04', '21.02.2017 9:35:29'),
(73, 0, 0, 752.2, -1.2, 0, 11150, 15, 738.4, 15, 11630, 10650, 0, 3, '2017-02-21 05:38:04', '21.02.2017 9:35:30');

-- --------------------------------------------------------

--
-- Структура таблицы `status`
--

CREATE TABLE `status` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `state` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `sector` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `status`
--

INSERT INTO `status` (`id`, `state`, `sector`) VALUES
(1, 'normal', 'main');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `login` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(10) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`user_id`, `login`, `title`, `email`, `password`) VALUES
(1, 'ssv', '', '', 'ddd'),
(2, 'msn', '', '', 'ddd');

-- --------------------------------------------------------

--
-- Структура таблицы `visits`
--

CREATE TABLE `visits` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `ip` varchar(16) NOT NULL,
  `rip` varchar(16) NOT NULL,
  `ua` text NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `ver` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='тут хранятся визиты пользователей';

--
-- Дамп данных таблицы `visits`
--

INSERT INTO `visits` (`id`, `ip`, `rip`, `ua`, `datetime`, `ver`) VALUES
(1, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-21 05:27:44', ''),
(2, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-21 05:27:48', ''),
(3, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-21 05:37:20', '0.9.1 beta');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `rt_tanks`
--
ALTER TABLE `rt_tanks`
  ADD PRIMARY KEY (`num`);

--
-- Индексы таблицы `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- Индексы таблицы `visits`
--
ALTER TABLE `visits`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `status`
--
ALTER TABLE `status`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `user_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT для таблицы `visits`
--
ALTER TABLE `visits`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
