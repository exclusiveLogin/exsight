-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Фев 22 2017 г., 10:20
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
(1, 250.3, 331.4, 755.2, -50, 1054.2, 13200, 2.5, 755.2, 15, 14190, 12700, 0, 3, '2017-02-22 06:20:01', '22.02.2017 10:17:00'),
(2, 3410.7, 4508.1, 756.6, 1.8, 13283.5, 13500, 1.8, 747.5, 15, 14100, 13000, 0, 3, '2017-02-22 06:20:01', '22.02.2017 10:17:01'),
(3, 1208.8, 1628.9, 742.1, 0, 4778.3, 12900, 15, 742.1, 15, 14200, 12400, 0, 3, '2017-02-22 06:20:01', '22.02.2017 10:17:02'),
(4, 1442.5, 1949.3, 740, 0, 5779.2, 13200, 15, 740, 15, 14200, 12700, 0, 3, '2017-02-22 06:20:02', '22.02.2017 10:17:03'),
(5, 256.3, 340.1, 753.5, 33.8, 992.4, 13250, 33.8, 768.9, 15, 13700, 12750, 0, 4, '2017-02-22 06:20:02', '22.02.2017 10:17:04'),
(6, 3339.8, 4453.1, 750, -50, 13000, 13200, 15, 750, 15, 13700, 12700, 0, 4, '2017-02-22 06:20:02', '22.02.2017 10:17:05'),
(7, 1636.2, 2158.6, 758.5, 0, 6319, 13100, 15, 739.8, 21.8, 13700, 12600, 0, 4, '2017-02-22 06:20:02', '22.02.2017 10:17:06'),
(8, 0, 0, 768.5, NULL, -1000, 9400, NULL, 768.5, 15, 9700, 8900, 0, 4, '2017-02-22 06:20:02', '22.02.2017 10:17:07'),
(9, 1413.5, 1677.8, 842.5, -0.1, 4259.4, 11100, 15, 831.5, 15, 11620, 10600, 0, 8, '2017-02-22 06:20:02', '22.02.2017 10:17:08'),
(10, 3708.6, 4416.6, 839.7, 6, 10862.4, 11100, 15, 833.2, 15, 11690, 10600, 0, 10, '2017-02-22 06:20:02', '22.02.2017 10:17:09'),
(11, 292.6, 340, 860.5, 0, 856, 10450, 15, 850, 15, 10880, 9950, 0, 9, '2017-02-22 06:20:02', '22.02.2017 10:17:10'),
(12, 3758.3, 4481.7, 838.6, 0.7, 11061.8, 11200, 15, 828, 15, 11610, 10700, 0, 8, '2017-02-22 06:20:02', '22.02.2017 10:17:11'),
(13, 1164.6, 1387.1, 839.6, 4.5, 3414.3, 11100, 15, 826.3, 22.5, 11620, 10600, 0, 7, '2017-02-22 06:20:03', '22.02.2017 10:17:11'),
(14, 449.7, 516, 871.6, -2.3, 1372.1, 10600, 1.3, 859.5, 15, 11660, 10100, 0, 9, '2017-02-22 06:20:03', '22.02.2017 10:17:13'),
(15, 3154, 3715, 849, 0, 9118.3, 11000, 15, 849, 15, 11600, 10500, 0, 10, '2017-02-22 06:20:03', '22.02.2017 10:17:14'),
(16, 0, 0, 844, NULL, -1000, 10400, NULL, 844, 15, 10700, 9900, 0, 10, '2017-02-22 06:20:03', '22.02.2017 10:17:15'),
(17, 250.9, 285.9, 877.6, 0, 743.7, 11250, 15, 877.6, 15, 11600, 10750, 0, 9, '2017-02-22 06:20:03', '22.02.2017 10:17:16'),
(18, 372.5, 438.4, 849.7, 1.6, 1056.7, 11100, 1.6, 840, 15, 11630, 10600, 0, 10, '2017-02-22 06:20:03', '22.02.2017 10:17:17'),
(19, 294.9, 348.6, 846, 3, 933.8, 10200, 5, 838, 15, 11180, 9700, 0, 10, '2017-02-22 06:20:03', '22.02.2017 10:17:18'),
(20, 0, 0, 867.3, -50, -1000, 13250, NULL, 867.3, 15, 14300, 12750, 0, 9, '2017-02-22 06:20:03', '22.02.2017 10:17:19'),
(51, 472.7, 630, 750.3, -1.7, 7377.5, 8080, 2.6, 731.7, 20, 8320, 7580, 0, 3, '2017-02-22 06:20:03', '22.02.2017 10:17:20'),
(52, 382.1, 497.2, 768.6, -2.1, 5824.2, 8050, 2.3, 750, 20, 8320, 7550, 0, 4, '2017-02-22 06:20:03', '22.02.2017 10:17:21'),
(53, 259.8, 312.8, 830.5, -9.2, 3662.6, 8020, 15, 812.4, 15, 8310, 7550, 0, 7, '2017-02-22 06:20:03', '22.02.2017 10:17:22'),
(54, 445.3, 534.6, 833, -50, 6238.6, 8020, 15, 833, 15, 8260, 7200, 0, 0, '2017-02-22 06:20:03', '22.02.2017 10:17:23'),
(55, 164.8, 217.5, 757.9, -2.6, 2529.6, 8040, 15, 743, 15, 8260, 7540, 0, 11, '2017-02-22 06:20:03', '22.02.2017 10:17:24'),
(56, 459.9, 625, 735.9, -3, 7295.3, 7400, 15, 720, 15, 8270, 6900, 0, 3, '2017-02-22 06:20:03', '22.02.2017 10:17:25'),
(69, 22.9, 29.6, 773.7, -0.1, 32.3, 11100, 15, 757, 20, 11610, 10600, 0, 3, '2017-02-22 06:20:04', '22.02.2017 10:17:26'),
(70, 0, 0, 763, -0.4, 0, 11000, -0.4, 750, 15, 11620, 10500, 0, 3, '2017-02-22 06:20:04', '22.02.2017 10:17:27'),
(71, 17.5, 23.6, 740.2, 0, 0, 11230, -0.5, 727.2, 15, 11630, 10730, 0, 3, '2017-02-22 06:20:04', '22.02.2017 10:17:28'),
(72, 4.5, 6, 752.2, -0.1, 41.3, 11200, 0, 739.2, 15, 11610, 10700, 0, 3, '2017-02-22 06:20:04', '22.02.2017 10:17:29'),
(73, 0, 0, 751.3, -0.1, 0, 11150, 15, 738.4, 15, 11630, 10650, 0, 3, '2017-02-22 06:20:04', '22.02.2017 10:17:30');

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
(3, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-21 05:37:20', '0.9.1 beta'),
(4, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-21 05:44:09', '0.9.1 beta'),
(5, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-21 05:44:35', '0.9.1 beta'),
(6, '10.210.28.150', '10.210.30.24', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 YaBrowser/17.1.0.2034 Yowser/2.5 Safari/537.36', '2017-02-21 05:54:53', '0.9.1 beta'),
(7, '10.210.31.170', '', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0', '2017-02-21 05:55:03', '0.9.1 beta'),
(8, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-21 06:04:58', '0.9.1 beta'),
(9, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-21 06:08:17', '0.9.1 beta'),
(10, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-21 06:10:21', '0.9.1 beta'),
(11, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-21 06:19:25', '0.9.1 beta'),
(12, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-21 06:20:02', '0.9.1 beta'),
(13, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0', '2017-02-21 06:59:41', '0.9.1 beta'),
(14, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-21 07:18:12', '0.9.1 beta'),
(15, '10.210.28.150', '10.210.28.87', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-21 10:04:05', '0.9.1 beta'),
(16, '10.210.28.150', '10.210.28.87', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-21 10:04:18', '0.9.1 beta'),
(17, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-21 10:49:07', '0.9.1 beta'),
(18, '10.210.28.150', '10.210.28.87', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-21 12:20:13', '0.9.1 beta'),
(19, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 04:51:45', '0.9.1 beta'),
(20, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 05:01:25', '0.9.1 beta'),
(21, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 05:02:01', '0.9.1 beta'),
(22, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 05:19:10', '0.9.1 beta'),
(23, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 05:48:27', '0.9.1 beta'),
(24, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 05:48:28', '0.9.1 beta'),
(25, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 05:50:04', '0.9.1 beta'),
(26, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 06:03:10', '0.9.1 beta'),
(27, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 06:05:36', '0.9.1 beta');

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
