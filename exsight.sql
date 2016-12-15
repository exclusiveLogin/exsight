-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Дек 15 2016 г., 16:36
-- Версия сервера: 5.7.16-0ubuntu0.16.04.1
-- Версия PHP: 7.0.8-0ubuntu0.16.04.3

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
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `rt_tanks`
--

INSERT INTO `rt_tanks` (`num`, `mass`, `volume`, `plot`, `temp`, `level`, `max_level`, `tempvapor`, `plotlab`, `templab`, `avlevel`, `signallevel`, `pereliv`, `product`, `datetime`) VALUES
(1, 1050.1, 1438.6, 730, -50, 4293.2, 13200, -15.5, 730, 15, 14190, 12700, 0, 0, '2016-12-15 12:34:01'),
(2, 2107, 2792.5, 754.5, 2, 8262.8, 13500, 3951.9, 744.8, 15, 14100, 13000, 0, 3, '2016-12-15 12:36:01'),
(3, 2953.2, 3912.7, 754.8, 20.1, 11460.5, 12900, 15, 742.1, 15, 14200, 12400, 0, 0, '2016-12-15 12:36:01'),
(4, 222.1, 295, 752.7, 0, 940.2, 13200, 15, 740, 15, 14200, 12700, 0, 3, '2016-12-15 12:36:01'),
(5, 524.5, 677, 774.7, 7.9, 1981.5, 13250, 7.8, 768.9, 15, 13700, 12750, 0, 4, '2016-12-15 12:36:01'),
(6, 1155.1, 1540.2, 750, -50, 4524.9, 13200, 15, 750, 15, 13700, 12700, 0, 4, '2016-12-15 12:35:02'),
(7, 2528.7, 3333.9, 758.5, 10.1, 9724.8, 13100, 15, 739.8, 21.8, 13700, 12600, 0, 4, '2016-12-15 12:36:01'),
(8, 0, 0, 768.5, NULL, -1000, 9400, NULL, 768.5, 15, 9700, 8900, 0, 4, '2016-12-13 11:34:01'),
(9, 388.2, 454.6, 854, -16, 1257.2, 11100, 15, 831.5, 15, 11620, 10600, 0, 8, '2016-12-15 12:36:01'),
(10, 386, 453, 852, -11, 1158.6, 11100, 15, 833.2, 15, 11690, 10600, 0, 0, '2016-12-15 12:36:02'),
(11, 289.5, 336.4, 860.5, 0, 847.2, 10450, 15, 850, 15, 10880, 9950, 0, 9, '2016-12-15 12:25:02'),
(12, 8.2, 9.6, 854.8, -21.3, -1000, 11200, 15, 828, 15, 11610, 10700, 0, 8, '2016-12-14 04:38:01'),
(13, 1061.8, 1253.1, 847.4, -6.1, 3084.5, 11100, 15, 826.3, 22.5, 11620, 10600, 0, 7, '2016-12-15 12:36:02'),
(14, 460.4, 524.5, 877.9, -11.3, 1392.9, 10600, -14.6, 859.5, 15, 11660, 10100, 0, 9, '2016-12-15 12:36:02'),
(15, 3333.2, 3977.2, 838.1, NULL, 9758.5, 11000, 15, 827, 15, 11600, 10500, 1, 10, '2016-12-15 12:35:02'),
(16, 0, 0, 844, NULL, -1000, 10400, NULL, 844, 15, 10700, 9900, 0, 10, '2016-12-13 11:34:02'),
(17, 253.3, 285.3, 887.7, 0, 742.3, 11250, 15, 877.6, 15, 11600, 10750, 0, 9, '2016-12-15 12:13:01'),
(18, 323.5, 375.2, 862.7, -16.4, 899.4, 11100, -16.3, 840, 15, 11630, 10600, 0, 10, '2016-12-15 12:36:02'),
(19, 437.1, 517.4, 844.8, 0, 1353.9, 10200, 5, 831.5, 15, 11180, 9700, 0, 10, '2016-12-15 12:36:02'),
(20, 0, 0, 867.3, -50, -1000, 13250, NULL, 867.3, 15, 14300, 12750, 0, 9, '2016-12-13 11:34:02'),
(51, 122.7, 161.3, 760.9, -14.1, 1886.6, 8080, -16.9, 731.7, 20, 8320, 7580, 0, 3, '2016-12-15 12:36:02'),
(52, 321.9, 415.9, 774, -8.4, 4872, 8050, -15.9, 750, 20, 8320, 7550, 0, 4, '2016-12-15 12:36:02'),
(53, 210.3, 252.5, 832.9, -12.3, 2957.4, 8020, 15, 812.4, 15, 8310, 7550, 0, 7, '2016-12-15 12:36:02'),
(54, 440.7, 529, 833, -50, 6173.1, 8020, 15, 833, 15, 8260, 7200, 0, 0, '2016-12-15 12:36:02'),
(55, 3.2, 4.1, 768.5, -15.3, 48, 8040, 15, 743, 15, 8260, 7540, 0, 11, '2016-12-15 12:36:02'),
(56, 411.9, 560.8, 734.5, -1.4, 6544.8, 7400, 15, 720, 15, 8270, 6900, 0, 3, '2016-12-15 12:36:03'),
(69, 643.7, 822.5, 782.6, -10.8, 2856.2, 11100, 15, 757, 20, 11610, 10600, 0, 3, '2016-12-15 12:31:02'),
(70, 0, 0, 762.7, -0.1, 0, 11000, -0.1, 750, 15, 11620, 10500, 0, 3, '2016-12-15 12:36:03'),
(71, 17.5, 23.6, 740.2, 0, 0, 11230, -4.8, 727.2, 15, 11630, 10730, 0, 3, '2016-12-15 10:40:03'),
(72, 4.3, 5.7, 762.8, -12.6, 39, 11200, 0, 739.2, 15, 11610, 10700, 0, 3, '2016-12-15 12:36:03'),
(73, 0, 0, 761.8, -12.3, 0, 11150, 15, 738.4, 15, 11630, 10650, 0, 3, '2016-12-15 12:33:03');

-- --------------------------------------------------------

--
-- Структура таблицы `status`
--

CREATE TABLE `status` (
  `state` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `sector` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `status`
--

INSERT INTO `status` (`state`, `sector`) VALUES
('normal', 'main');

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

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `rt_tanks`
--
ALTER TABLE `rt_tanks`
  ADD PRIMARY KEY (`num`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `user_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
