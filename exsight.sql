-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Мар 31 2017 г., 15:29
-- Версия сервера: 5.7.17-0ubuntu0.16.04.1
-- Версия PHP: 7.0.15-0ubuntu0.16.04.4

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
-- Структура таблицы `defferreload`
--

CREATE TABLE `defferreload` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `ip` varchar(16) NOT NULL,
  `ua` text NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `ver` varchar(10) NOT NULL,
  `build` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='тут хранятся IP отложенной перезагрузки';

--
-- Дамп данных таблицы `defferreload`
--

INSERT INTO `defferreload` (`id`, `ip`, `ua`, `datetime`, `ver`, `build`) VALUES
(32, '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0', '2017-03-31 10:06:38', '0.9.4 ( be', 0),
(35, '10.210.30.24', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 YaBrowser/17.3.1.840 Yowser/2.5 Safari/537.36', '2017-03-31 10:06:38', '0.9.5', 95100),
(37, '10.210.30.25', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-31 10:06:38', '0.9.5', 95100);

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
  `fixtime` text,
  `hidezone` float DEFAULT NULL,
  `service` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `rt_tanks`
--

INSERT INTO `rt_tanks` (`num`, `mass`, `volume`, `plot`, `temp`, `level`, `max_level`, `tempvapor`, `plotlab`, `templab`, `avlevel`, `signallevel`, `pereliv`, `product`, `datetime`, `fixtime`, `hidezone`, `service`) VALUES
(1, 859.5, 1138.1, 755.2, -50, 3415.8, 13200, 0.18, 755.2, 15, 14190, 12700, 0, 3, '2017-03-31 11:29:01', '31.03.2017 15:24:00', 155, NULL),
(2, 565, 748.9, 754.4, 1.2, 2322.3, 13500, 1.2, 740.7, 15, 14100, 13000, 0, 3, '2017-03-31 11:29:02', '31.03.2017 15:24:01', 145, NULL),
(3, 2085.2, 2762.7, 754.8, 0, 8095.1, 12900, 15, 742.1, 15, 14200, 12400, 0, 3, '2017-03-31 11:29:02', '31.03.2017 15:24:02', 173, NULL),
(4, 200.7, 266.6, 752.7, 0, 854.6, 13200, 15, 740, 15, 14200, 12700, 0, 3, '2017-03-31 11:29:02', '31.03.2017 15:24:03', 160, NULL),
(5, 3082.9, 4112.8, 749.6, 38.6, 11994.1, 13250, 676, 768.9, 15, 13700, 12750, 0, 4, '2017-03-31 11:29:02', '31.03.2017 15:24:04', 184, NULL),
(6, 2656.2, 3541.6, 750, -50, 10348.5, 13200, 15, 750, 15, 13700, 12700, 0, 4, '2017-03-31 11:29:02', '31.03.2017 15:24:05', 170, NULL),
(7, 3255.3, 4400.3, 739.8, 0, 12822.6, 13100, 15, 739.8, 21.8, 13700, 12600, 0, 4, '2017-03-31 11:29:02', '31.03.2017 15:24:06', 172, NULL),
(8, 0, 0, 768.5, NULL, -1000, 9400, NULL, 768.5, 15, 9700, 8900, 0, 4, '2017-03-31 11:29:02', '31.03.2017 15:24:07', 210, 1),
(9, 2706.4, 3220.5, 840.4, 2.8, 8039, 11100, 15, 831.5, 15, 11620, 10600, 0, 10, '2017-03-31 11:29:03', '31.03.2017 15:24:08', 215, NULL),
(10, 243.4, 289, 841.9, 2.96, 750.7, 11100, 15, 833.2, 15, 11690, 10600, 0, 10, '2017-03-31 11:29:03', '31.03.2017 15:24:09', 223, NULL),
(11, 2.4, 2.8, 860.5, 0, 0, 10450, 15, 850, 15, 10880, 9950, 0, 9, '2017-03-31 11:29:03', '31.03.2017 15:24:10', 245, NULL),
(12, 915.4, 1096.8, 834.6, 6.04, 2726.2, 11200, 15, 828, 15, 11610, 10700, 0, 10, '2017-03-31 11:29:03', '31.03.2017 15:24:11', 228, NULL),
(13, 0, 0, 841.8, 1.52, 0, 11100, 15, 826.3, 22.5, 11620, 10600, 0, 10, '2017-03-31 11:29:03', '31.03.2017 15:24:12', 236, NULL),
(14, 39.8, 45.9, 868.3, 2.46, 200.5, 10600, 2.45, 859.5, 15, 11660, 10100, 0, 9, '2017-03-31 11:29:03', '31.03.2017 15:24:13', 238, NULL),
(15, 791.6, 920.8, 859.7, 0, 2288.4, 11000, 15, 849, 15, 11600, 10500, 0, 10, '2017-03-31 11:29:03', '31.03.2017 15:24:14', 231, NULL),
(16, 0, 0, 844, NULL, -1000, 10400, NULL, 844, 15, 10700, 9900, 0, 10, '2017-03-31 11:29:03', '31.03.2017 15:24:15', 235, 1),
(17, 1006.3, 1133.6, 887.7, 0, 2834.7, 11250, 15, 877.6, 15, 11600, 10750, 0, 9, '2017-03-31 11:29:04', '31.03.2017 15:24:16', 235, NULL),
(18, 245.4, 289.5, 848, 4.01, 685.7, 11100, 4, 840, 15, 11630, 10600, 0, 10, '2017-03-31 11:29:04', '31.03.2017 15:24:17', 245, NULL),
(19, 178.5, 210.7, 847, 0.54, 590.6, 10200, 5, 838, 15, 11180, 9700, 0, 10, '2017-03-31 11:29:04', '31.03.2017 15:24:18', 213, NULL),
(20, 0, 0, 867.3, -50, -1000, 13250, NULL, 867.3, 15, 14300, 12750, 0, 9, '2017-03-31 11:29:04', '31.03.2017 15:24:19', 210, 1),
(51, 465.7, 621.5, 749.3, -0.59, 7277.8, 8080, 0.63, 731.7, 20, 8320, 7580, 0, 3, '2017-03-31 11:29:04', '31.03.2017 15:24:20', 31, NULL),
(52, 270.5, 352.5, 767.3, -0.52, 4126.2, 8050, 0.69, 750, 20, 8320, 7550, 0, 4, '2017-03-31 11:29:04', '31.03.2017 15:24:21', 30, NULL),
(53, 302.8, 367.5, 823.9, -0.27, 4302.3, 8020, 15, 812.4, 15, 8310, 7550, 0, 10, '2017-03-31 11:29:04', '31.03.2017 15:24:22', 34, NULL),
(54, 0.1, 0.1, 833, -50, 1, 8020, 15, 833, 15, 8260, 7200, 0, 10, '2017-03-31 11:29:04', '31.03.2017 15:24:22', 35, NULL),
(55, 144.5, 190.9, 756.9, -1.44, 2220.6, 8040, 15, 743, 15, 8260, 7540, 0, 11, '2017-03-31 11:29:05', '31.03.2017 15:24:24', 31, NULL),
(56, 419, 571.6, 733, 0.25, 6671.4, 7400, 15, 720, 15, 8270, 6900, 0, 3, '2017-03-31 11:29:05', '31.03.2017 15:24:25', 50, NULL),
(69, 15.9, 20.6, 772.2, 1.7, 0, 11100, 15, 757, 20, 11610, 10600, 0, 3, '2017-03-31 11:29:05', '31.03.2017 15:24:26', 159, NULL),
(70, 0, 0, 762.3, 0.39, 0, 11000, 0.39, 750, 15, 11620, 10500, 0, 3, '2017-03-31 11:29:05', '31.03.2017 15:24:27', 140, NULL),
(71, 17.5, 23.6, 740.2, 0, 0, 11230, -0.19, 727.2, 15, 11630, 10730, 0, 3, '2017-03-31 11:29:05', '31.03.2017 15:24:28', 161, NULL),
(72, 3.6, 4.7, 752.1, -0.08, 32.5, 11200, 0, 739.2, 15, 11610, 10700, 0, 3, '2017-03-31 11:29:06', '31.03.2017 15:24:29', 140, NULL),
(73, 0, 0, 751, 0.27, 0, 11150, 15, 738.4, 15, 11630, 10650, 0, 3, '2017-03-31 11:29:06', '31.03.2017 15:24:30', 140, NULL);

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
-- Структура таблицы `uniqueip`
--

CREATE TABLE `uniqueip` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `ip` varchar(16) NOT NULL,
  `ua` text NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `ver` varchar(10) NOT NULL,
  `build` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='тут хранятся уникальные IP';

--
-- Дамп данных таблицы `uniqueip`
--

INSERT INTO `uniqueip` (`id`, `ip`, `ua`, `datetime`, `ver`, `build`) VALUES
(12, '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0', '2017-03-29 04:00:26', '0.9.4 ( be', 0),
(21, '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0', '2017-03-31 11:23:15', '0.9.6', 95110),
(37, '10.210.30.91', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-29 12:29:19', '0.9.5', 95100),
(38, '10.210.30.24', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 YaBrowser/17.3.1.840 Yowser/2.5 Safari/537.36', '2017-03-29 12:29:19', '0.9.5', 95100),
(39, '10.210.30.73', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.98 Safari/537.36 OPR/44.0.2510.857 (Edition Yx)', '2017-03-29 12:29:23', '0.9.5', 95100),
(56, '10.210.30.25', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 09:50:50', '0.9.5', 95100),
(115, '10.210.30.53', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586', '2017-03-31 04:56:08', '0.9.5', 95100);

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
  `ver` varchar(10) NOT NULL,
  `build` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='тут хранятся визиты пользователей';

--
-- Дамп данных таблицы `visits`
--

INSERT INTO `visits` (`id`, `ip`, `rip`, `ua`, `datetime`, `ver`, `build`) VALUES
(1, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-21 05:27:44', '', NULL),
(2, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-21 05:27:48', '', NULL),
(3, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-21 05:37:20', '0.9.1 beta', NULL),
(4, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-21 05:44:09', '0.9.1 beta', NULL),
(5, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-21 05:44:35', '0.9.1 beta', NULL),
(6, '10.210.28.150', '10.210.30.24', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 YaBrowser/17.1.0.2034 Yowser/2.5 Safari/537.36', '2017-02-21 05:54:53', '0.9.1 beta', NULL),
(7, '10.210.31.170', '', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0', '2017-02-21 05:55:03', '0.9.1 beta', NULL),
(8, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-21 06:04:58', '0.9.1 beta', NULL),
(9, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-21 06:08:17', '0.9.1 beta', NULL),
(10, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-21 06:10:21', '0.9.1 beta', NULL),
(11, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-21 06:19:25', '0.9.1 beta', NULL),
(12, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-21 06:20:02', '0.9.1 beta', NULL),
(13, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0', '2017-02-21 06:59:41', '0.9.1 beta', NULL),
(14, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-21 07:18:12', '0.9.1 beta', NULL),
(15, '10.210.28.150', '10.210.28.87', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-21 10:04:05', '0.9.1 beta', NULL),
(16, '10.210.28.150', '10.210.28.87', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-21 10:04:18', '0.9.1 beta', NULL),
(17, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-21 10:49:07', '0.9.1 beta', NULL),
(18, '10.210.28.150', '10.210.28.87', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-21 12:20:13', '0.9.1 beta', NULL),
(19, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 04:51:45', '0.9.1 beta', NULL),
(20, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 05:01:25', '0.9.1 beta', NULL),
(21, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 05:02:01', '0.9.1 beta', NULL),
(22, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 05:19:10', '0.9.1 beta', NULL),
(23, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 05:48:27', '0.9.1 beta', NULL),
(24, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 05:48:28', '0.9.1 beta', NULL),
(25, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 05:50:04', '0.9.1 beta', NULL),
(26, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 06:03:10', '0.9.1 beta', NULL),
(27, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 06:05:36', '0.9.1 beta', NULL),
(28, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 07:35:54', '0.9.1 beta', NULL),
(29, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 07:38:15', '0.9.1 beta', NULL),
(30, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 07:41:03', '0.9.1 beta', NULL),
(31, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 07:43:28', '0.9.1 beta', NULL),
(32, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 07:44:41', '0.9.1 beta', NULL),
(33, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 07:51:44', '0.9.1 beta', NULL),
(34, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 07:52:36', '0.9.1 beta', NULL),
(35, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 07:58:35', '0.9.1 beta', NULL),
(36, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 07:59:07', '0.9.1 beta', NULL),
(37, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 07:59:49', '0.9.1 beta', NULL),
(38, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 07:59:59', '0.9.1 beta', NULL),
(39, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 08:01:18', '0.9.1 beta', NULL),
(40, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 08:17:26', '0.9.1 beta', NULL),
(41, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 08:32:04', '0.9.1 beta', NULL),
(42, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 08:35:04', '0.9.1 beta', NULL),
(43, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 08:37:19', '0.9.1 beta', NULL),
(44, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 08:38:19', '0.9.1 beta', NULL),
(45, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 08:39:41', '0.9.1 beta', NULL),
(46, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 08:40:18', '0.9.1 beta', NULL),
(47, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 08:44:20', '0.9.1 beta', NULL),
(48, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 08:45:31', '0.9.1 beta', NULL),
(49, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 08:46:19', '0.9.1 beta', NULL),
(50, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 08:49:50', '0.9.1 beta', NULL),
(51, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 08:50:43', '0.9.1 beta', NULL),
(52, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 08:54:27', '0.9.1 beta', NULL),
(53, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 08:56:10', '0.9.1 beta', NULL),
(54, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 08:57:51', '0.9.1 beta', NULL),
(55, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 08:59:08', '0.9.1 beta', NULL),
(56, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 08:59:56', '0.9.1 beta', NULL),
(57, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 09:40:18', '0.9.1 beta', NULL),
(58, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 09:47:24', '0.9.1 beta', NULL),
(59, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 09:54:05', '0.9.1 beta', NULL),
(60, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 09:54:13', '0.9.1 beta', NULL),
(61, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 10:19:27', '0.9.1 beta', NULL),
(62, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 10:22:04', '0.9.1 beta', NULL),
(63, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 10:24:37', '0.9.1 beta', NULL),
(64, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 10:34:50', '0.9.1 beta', NULL),
(65, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 10:47:55', '0.9.1 beta', NULL),
(66, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 10:56:06', '0.9.1 beta', NULL),
(67, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 10:57:39', '0.9.1 beta', NULL),
(68, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0', '2017-02-22 11:10:48', '0.9.1 beta', NULL),
(69, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 11:13:49', '0.9.1 beta', NULL),
(70, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 11:22:59', '0.9.1 beta', NULL),
(71, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 11:24:40', '0.9.1 beta', NULL),
(72, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 11:32:56', '0.9.1 beta', NULL),
(73, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 11:36:02', '0.9.1 beta', NULL),
(74, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 11:37:04', '0.9.1 beta', NULL),
(75, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 11:37:26', '0.9.1 beta', NULL),
(76, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-22 11:40:42', '0.9.1 beta', NULL),
(77, '10.210.28.150', '10.210.28.77', 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', '2017-02-22 11:41:31', '0.9.1 beta', NULL),
(78, '10.210.28.150', '10.210.28.77', 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', '2017-02-22 11:41:45', '0.9.1 beta', NULL),
(79, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0', '2017-02-22 11:44:38', '0.9.1 beta', NULL),
(80, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0', '2017-02-22 11:45:00', '0.9.1 beta', NULL),
(81, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0', '2017-02-22 11:45:32', '0.9.1 beta', NULL),
(82, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0', '2017-02-22 11:46:05', '0.9.1 beta', NULL),
(83, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-27 04:01:44', '0.9.1 beta', NULL),
(84, '10.210.28.150', '10.210.30.24', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 YaBrowser/17.1.1.1003 Yowser/2.5 Safari/537.36', '2017-02-27 04:02:16', '0.9.1 beta', NULL),
(85, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-27 04:02:26', '0.9.1 beta', NULL),
(86, '10.210.28.150', '10.210.28.77', 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', '2017-02-27 04:04:09', '0.9.1 beta', NULL),
(87, '10.210.28.150', '10.210.28.77', 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', '2017-02-27 04:04:22', '0.9.1 beta', NULL),
(88, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-27 04:15:57', '0.9.1 beta', NULL),
(89, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-27 04:17:30', '0.9.1 beta', NULL),
(90, '10.210.28.150', '10.210.28.77', 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', '2017-02-27 04:18:49', '0.9.1 beta', NULL),
(91, '10.210.28.150', '10.210.28.77', 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', '2017-02-27 04:18:54', '0.9.1 beta', NULL),
(92, '10.210.28.150', '10.210.28.77', 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', '2017-02-27 04:19:04', '0.9.1 beta', NULL),
(93, '10.210.28.150', '10.210.28.77', 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36', '2017-02-27 04:21:41', '0.9.1 beta', NULL),
(94, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-27 04:24:43', '0.9.1 beta', NULL),
(95, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko', '2017-02-27 04:25:12', '0.9.1 beta', NULL),
(96, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko', '2017-02-27 04:26:13', '0.9.1 beta', NULL),
(97, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-27 04:31:12', '0.9.1 beta', NULL),
(98, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0', '2017-02-27 04:34:43', '0.9.1 beta', NULL),
(99, '10.210.28.150', '10.210.30.16', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 YaBrowser/17.1.1.1003 Yowser/2.5 Safari/537.36', '2017-02-27 05:17:41', '0.9.1 beta', NULL),
(100, '10.210.28.150', '10.210.28.87', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-27 06:10:37', '0.9.1 beta', NULL),
(101, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-27 06:58:30', '0.9.1 beta', NULL),
(102, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-27 06:59:15', '0.9.1 beta', NULL),
(103, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-27 08:31:03', '0.9.1 beta', NULL),
(104, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-27 08:38:27', '0.9.1 beta', NULL),
(105, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-27 08:39:04', '0.9.1 beta', NULL),
(106, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-27 08:45:13', '0.9.1 beta', NULL),
(107, '10.210.28.150', '10.210.30.24', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 YaBrowser/17.1.1.1003 Yowser/2.5 Safari/537.36', '2017-02-27 09:18:44', '0.9.1 beta', NULL),
(108, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-27 10:20:39', '0.9.1 beta', NULL),
(109, '10.210.28.150', '10.210.30.16', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 YaBrowser/17.1.1.1003 Yowser/2.5 Safari/537.36', '2017-02-27 11:19:48', '0.9.1 beta', NULL),
(110, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-28 04:09:55', '0.9.1 beta', NULL),
(111, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-28 04:10:25', '0.9.1 beta', NULL),
(112, '10.210.30.91', '', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-28 04:35:35', '0.9.1 beta', NULL),
(113, '10.210.30.91', '', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-28 04:36:39', '0.9.1 beta', NULL),
(114, '10.210.28.150', '10.210.30.91', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-28 04:38:56', '0.9.1 beta', NULL),
(115, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-28 04:52:00', '0.9.1 beta', NULL),
(116, '10.210.28.150', '10.210.30.95', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-02-28 05:58:50', '0.9.1 beta', NULL),
(117, '10.210.28.150', '10.210.30.53', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586', '2017-03-01 12:13:55', '0.9.1 beta', NULL),
(118, '10.210.28.150', '10.210.30.53', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-01 12:15:07', '0.9.1 beta', NULL),
(119, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0', '2017-03-01 12:37:19', '0.9.1 beta', NULL),
(120, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-02 04:16:54', '0.9.1 beta', NULL),
(121, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-02 04:19:35', '0.9.1 beta', NULL),
(122, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0', '2017-03-02 06:20:29', '0.9.1 beta', NULL),
(123, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0', '2017-03-02 09:41:07', '0.9.1 beta', NULL),
(124, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-03 04:34:03', '0.9.1 beta', NULL),
(125, '10.210.28.150', '10.210.30.80', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 YaBrowser/17.3.0.1785 Yowser/2.5 Safari/537.36', '2017-03-03 11:41:33', '0.9.1 beta', NULL),
(126, '10.210.28.150', '10.210.30.80', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 YaBrowser/17.3.0.1785 Yowser/2.5 Safari/537.36', '2017-03-03 11:41:41', '0.9.1 beta', NULL),
(127, '10.210.28.150', '10.210.30.80', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 YaBrowser/17.3.0.1785 Yowser/2.5 Safari/537.36', '2017-03-03 11:41:43', '0.9.1 beta', NULL),
(128, '10.210.28.150', '10.210.30.80', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 YaBrowser/17.3.0.1785 Yowser/2.5 Safari/537.36', '2017-03-03 11:41:43', '0.9.1 beta', NULL),
(129, '10.210.28.150', '10.210.30.80', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 YaBrowser/17.3.0.1785 Yowser/2.5 Safari/537.36', '2017-03-03 11:41:44', '0.9.1 beta', NULL),
(130, '10.210.28.150', '10.210.30.80', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 YaBrowser/17.3.0.1785 Yowser/2.5 Safari/537.36', '2017-03-03 11:41:44', '0.9.1 beta', NULL),
(131, '10.210.28.150', '10.210.30.80', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 YaBrowser/17.3.0.1785 Yowser/2.5 Safari/537.36', '2017-03-03 11:41:45', '0.9.1 beta', NULL),
(132, '10.210.28.150', '10.210.30.80', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 YaBrowser/17.3.0.1785 Yowser/2.5 Safari/537.36', '2017-03-03 11:41:45', '0.9.1 beta', NULL),
(133, '10.210.28.150', '10.210.30.80', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 YaBrowser/17.3.0.1785 Yowser/2.5 Safari/537.36', '2017-03-03 11:41:46', '0.9.1 beta', NULL),
(134, '10.210.28.150', '10.210.30.80', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 YaBrowser/17.3.0.1785 Yowser/2.5 Safari/537.36', '2017-03-03 11:45:19', '0.9.1 beta', NULL),
(135, '10.210.28.150', '10.210.30.80', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 YaBrowser/17.3.0.1785 Yowser/2.5 Safari/537.36', '2017-03-03 11:45:19', '0.9.1 beta', NULL),
(136, '10.210.28.150', '10.210.30.80', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 YaBrowser/17.3.0.1785 Yowser/2.5 Safari/537.36', '2017-03-03 11:45:20', '0.9.1 beta', NULL),
(137, '10.210.28.150', '10.210.30.80', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 YaBrowser/17.3.0.1785 Yowser/2.5 Safari/537.36', '2017-03-03 11:45:20', '0.9.1 beta', NULL),
(138, '10.210.28.150', '10.210.30.80', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 YaBrowser/17.3.0.1785 Yowser/2.5 Safari/537.36', '2017-03-03 11:45:21', '0.9.1 beta', NULL),
(139, '10.210.28.150', '10.210.30.80', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 YaBrowser/17.3.0.1785 Yowser/2.5 Safari/537.36', '2017-03-03 11:45:22', '0.9.1 beta', NULL),
(140, '10.210.28.150', '10.210.30.80', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 YaBrowser/17.3.0.1785 Yowser/2.5 Safari/537.36', '2017-03-03 11:45:22', '0.9.1 beta', NULL),
(141, '10.210.28.150', '10.210.30.80', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 YaBrowser/17.3.0.1785 Yowser/2.5 Safari/537.36', '2017-03-03 11:45:23', '0.9.1 beta', NULL),
(142, '10.210.28.150', '10.210.30.24', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 YaBrowser/17.1.1.1003 Yowser/2.5 Safari/537.36', '2017-03-03 11:47:17', '0.9.1 beta', NULL),
(143, '10.210.28.150', '10.210.30.24', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 YaBrowser/17.1.1.1003 Yowser/2.5 Safari/537.36', '2017-03-06 04:08:43', '0.9.1 beta', NULL),
(144, '10.210.28.150', '10.210.30.53', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586', '2017-03-06 06:31:08', '0.9.1 beta', NULL),
(145, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-06 07:12:14', '0.9.1 beta', NULL),
(146, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-07 05:28:24', '0.9.1 beta', NULL),
(147, '10.210.28.150', '10.210.30.80', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 YaBrowser/17.3.0.1785 Yowser/2.5 Safari/537.36', '2017-03-07 05:30:17', '0.9.1 beta', NULL),
(148, '10.210.28.150', '10.210.30.80', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 YaBrowser/17.3.0.1785 Yowser/2.5 Safari/537.36', '2017-03-07 05:30:19', '0.9.1 beta', NULL),
(149, '10.210.28.150', '10.210.30.80', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 YaBrowser/17.3.0.1785 Yowser/2.5 Safari/537.36', '2017-03-07 05:30:30', '0.9.1 beta', NULL),
(150, '10.210.28.150', '10.210.30.80', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 YaBrowser/17.3.0.1785 Yowser/2.5 Safari/537.36', '2017-03-07 05:30:31', '0.9.1 beta', NULL),
(151, '10.210.28.150', '10.210.30.80', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 YaBrowser/17.3.0.1785 Yowser/2.5 Safari/537.36', '2017-03-07 05:30:33', '0.9.1 beta', NULL),
(152, '10.210.28.150', '10.210.30.80', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 YaBrowser/17.3.0.1785 Yowser/2.5 Safari/537.36', '2017-03-07 05:30:33', '0.9.1 beta', NULL),
(153, '10.210.0.246', '', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36 OPR/43.0.2442.1144 (Edition Yx)', '2017-03-07 06:52:05', '0.9.1 beta', NULL),
(154, '10.210.0.246', '', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36 OPR/43.0.2442.1144 (Edition Yx)', '2017-03-07 09:46:12', '0.9.1 beta', NULL),
(155, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-07 11:33:31', '0.9.1 beta', NULL),
(156, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0', '2017-03-09 05:13:06', '0.9.1 beta', NULL),
(157, '10.210.28.150', '10.210.30.16', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 YaBrowser/17.1.1.1003 Yowser/2.5 Safari/537.36', '2017-03-09 08:06:26', '0.9.1 beta', NULL),
(158, '10.210.28.150', '10.210.30.16', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 YaBrowser/17.1.1.1003 Yowser/2.5 Safari/537.36', '2017-03-09 08:06:26', '0.9.1 beta', NULL),
(159, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0', '2017-03-09 10:00:57', '0.9.1 beta', NULL),
(160, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0', '2017-03-09 10:14:42', '0.9.1 beta', NULL),
(161, '10.213.2.10', '', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-09 10:19:31', '0.9.1 beta', NULL),
(162, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-09 10:32:32', '0.9.1 beta', NULL),
(163, '10.210.28.150', '10.210.30.16', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 YaBrowser/17.1.1.1003 Yowser/2.5 Safari/537.36', '2017-03-10 11:41:01', '0.9.1 beta', NULL),
(164, '10.210.28.150', '10.210.30.16', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 YaBrowser/17.1.1.1003 Yowser/2.5 Safari/537.36', '2017-03-10 11:41:01', '0.9.1 beta', NULL),
(165, '10.210.28.150', '10.210.30.31', 'Mozilla/5.0 (Windows NT 5.1; rv:52.0) Gecko/20100101 Firefox/52.0', '2017-03-11 12:13:48', '0.9.1 beta', NULL),
(166, '10.210.28.150', '10.210.30.31', 'Mozilla/5.0 (Windows NT 5.1; rv:52.0) Gecko/20100101 Firefox/52.0', '2017-03-11 12:18:03', '0.9.1 beta', NULL),
(167, '10.210.28.150', '10.210.30.24', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 YaBrowser/17.3.0.1785 Yowser/2.5 Safari/537.36', '2017-03-13 03:55:59', '0.9.1 beta', NULL),
(168, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 04:18:31', '0.9.1 beta', NULL),
(169, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 04:46:31', '0.9.1 beta', NULL),
(170, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 05:07:07', '0.9.1 beta', NULL),
(171, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 06:03:12', '0.9.1 beta', NULL),
(172, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 06:09:25', '0.9.1 beta', NULL),
(173, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 07:17:45', '0.9.1 beta', NULL),
(174, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 08:54:06', '0.9.1 beta', NULL),
(175, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 08:55:43', '0.9.1 beta', NULL),
(176, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 08:56:53', '0.9.3 beta', NULL),
(177, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 08:58:05', '0.9.3 beta', NULL),
(178, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 08:58:36', '0.9.3 beta', NULL),
(179, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 09:01:23', '0.9.3 beta', NULL),
(180, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 09:15:30', '0.9.3 beta', NULL),
(181, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 09:16:33', '0.9.3 beta', NULL),
(182, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 09:17:21', '0.9.3 beta', NULL),
(183, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 09:17:24', '0.9.3 beta', NULL),
(184, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 09:17:26', '0.9.3 beta', NULL),
(185, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 09:17:40', '0.9.3 beta', NULL),
(186, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 09:18:04', '0.9.3 beta', NULL),
(187, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 09:21:17', '0.9.3 beta', NULL),
(188, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 09:21:49', '0.9.3 beta', NULL),
(189, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 09:28:39', '0.9.3 beta', NULL),
(190, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 09:29:09', '0.9.3 beta', NULL),
(191, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 09:31:05', '0.9.3 beta', NULL),
(192, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 09:32:37', '0.9.3 beta', NULL),
(193, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 09:36:14', '0.9.3 beta', NULL),
(194, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 09:38:56', '0.9.3 beta', NULL),
(195, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 09:53:08', '0.9.3 beta', NULL),
(196, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 09:53:29', '0.9.3 beta', NULL),
(197, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 09:54:00', '0.9.3 beta', NULL),
(198, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0', '2017-03-13 09:55:44', '0.9.3 beta', NULL),
(199, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 09:56:53', '0.9.3 beta', NULL),
(200, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0', '2017-03-13 09:57:01', '0.9.3 beta', NULL),
(201, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 10:04:12', '0.9.3 beta', NULL),
(202, '10.210.4.136', 'unknown', 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko', '2017-03-13 10:10:09', '0.9.1 beta', NULL),
(203, '10.210.4.136', 'unknown', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 10:10:21', '0.9.1 beta', NULL),
(204, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 10:11:46', '0.9.3 beta', NULL),
(205, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 10:13:39', '0.9.3 beta', NULL),
(206, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 10:14:39', '0.9.3 beta', NULL),
(207, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 10:15:37', '0.9.3 beta', NULL),
(208, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 10:16:12', '0.9.3 beta', NULL),
(209, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 10:17:14', '0.9.3 beta', NULL),
(210, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 10:27:56', '0.9.3 beta', NULL),
(211, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 10:31:18', '0.9.3 beta', NULL),
(212, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 10:32:02', '0.9.3 beta', NULL),
(213, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 10:45:31', '0.9.3 beta', NULL),
(214, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 10:49:05', '0.9.3 beta', NULL),
(215, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 10:51:49', '0.9.3 beta', NULL),
(216, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 11:03:19', '0.9.3 beta', NULL),
(217, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 11:05:36', '0.9.3 beta', NULL),
(218, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 11:05:38', '0.9.3 beta', NULL),
(219, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 11:06:28', '0.9.3 beta', NULL),
(220, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 11:06:59', '0.9.3 beta', NULL),
(221, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 11:15:00', '0.9.3 beta', NULL),
(222, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 11:25:47', '0.9.3 beta', NULL),
(223, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 11:26:44', '0.9.3 beta', NULL),
(224, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 11:31:10', '0.9.3 beta', NULL),
(225, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 11:31:56', '0.9.3 beta', NULL),
(226, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 11:32:54', '0.9.3 beta', NULL),
(227, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 11:34:09', '0.9.3 beta', NULL),
(228, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 11:35:34', '0.9.3 beta', NULL),
(229, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 11:35:47', '0.9.3 beta', NULL),
(230, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 11:47:55', '0.9.3 beta', NULL),
(231, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 12:10:59', '0.9.3 beta', NULL),
(232, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 12:24:29', '0.9.3 beta', NULL),
(233, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 12:25:33', '0.9.3 beta', NULL),
(234, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 12:36:57', '0.9.3 beta', NULL),
(235, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 12:38:34', '0.9.3 beta', NULL),
(236, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 12:39:26', '0.9.3 beta', NULL),
(237, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 12:41:55', '0.9.3 beta', NULL),
(238, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 12:42:22', '0.9.3 beta', NULL),
(239, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 12:43:20', '0.9.3 beta', NULL),
(240, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-13 12:43:57', '0.9.3 beta', NULL),
(241, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 04:30:24', '0.9.3 beta', NULL),
(242, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 04:38:43', '0.9.3 beta', NULL),
(243, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 04:42:43', '0.9.3 beta', NULL),
(244, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 04:54:33', '0.9.3 beta', NULL),
(245, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 05:05:53', '0.9.3 beta', NULL),
(246, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 05:06:08', '0.9.3 beta', NULL),
(247, '10.210.4.136', 'unknown', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 05:09:52', '0.9.1 beta', NULL),
(248, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 05:10:25', '0.9.3 beta', NULL),
(249, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 05:12:24', '0.9.3 beta', NULL),
(250, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 05:15:27', '0.9.3 beta', NULL),
(251, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 05:17:20', '0.9.3 beta', NULL),
(252, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 05:20:15', '0.9.3 beta', NULL),
(253, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 05:21:15', '0.9.3 beta', NULL);
INSERT INTO `visits` (`id`, `ip`, `rip`, `ua`, `datetime`, `ver`, `build`) VALUES
(254, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 05:24:30', '0.9.3 beta', NULL),
(255, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 05:25:28', '0.9.3 beta', NULL),
(256, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 05:26:33', '0.9.3 beta', NULL),
(257, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 05:26:39', '0.9.3 beta', NULL),
(258, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 05:28:51', '0.9.3 beta', NULL),
(259, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 05:29:25', '0.9.3 beta', NULL),
(260, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 05:30:34', '0.9.3 beta', NULL),
(261, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 05:33:48', '0.9.3 beta', NULL),
(262, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0', '2017-03-14 05:37:18', '0.9.1 beta', NULL),
(263, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0', '2017-03-14 05:37:48', '0.9.3 beta', NULL),
(264, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0', '2017-03-14 05:37:59', '0.9.3 beta', NULL),
(265, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0', '2017-03-14 05:38:00', '0.9.3 beta', NULL),
(266, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 05:51:08', '0.9.3 beta', NULL),
(267, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 05:54:27', '0.9.3 beta', NULL),
(268, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 06:01:10', 'Array', NULL),
(269, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 06:01:18', 'Array', NULL),
(270, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 06:01:28', 'Array', NULL),
(271, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 06:02:48', 'Array', NULL),
(272, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 06:06:25', 'Array', NULL),
(273, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 06:08:50', 'Array', NULL),
(274, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 06:30:53', 'Array', NULL),
(275, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 06:31:33', 'Array', NULL),
(276, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0', '2017-03-14 06:33:23', '0.9.1 beta', NULL),
(277, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0', '2017-03-14 06:33:35', '0.9.3 beta', NULL),
(278, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0', '2017-03-14 06:33:42', 'Array', NULL),
(279, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 06:34:39', 'Array', NULL),
(280, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 06:35:47', 'Array', NULL),
(281, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 06:36:20', 'Array', NULL),
(282, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 06:39:51', 'Array', NULL),
(283, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 06:40:26', 'Array', NULL),
(284, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 06:51:37', 'Array', NULL),
(285, '10.210.28.150', '10.210.30.24', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 YaBrowser/17.3.0.1785 Yowser/2.5 Safari/537.36', '2017-03-14 06:53:14', '0.9.1 beta', NULL),
(286, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 06:53:17', 'Array', NULL),
(287, '10.210.28.150', '10.210.30.24', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 YaBrowser/17.3.0.1785 Yowser/2.5 Safari/537.36', '2017-03-14 06:56:07', '0.9.1 beta', NULL),
(288, '10.210.28.150', '10.210.30.24', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 YaBrowser/17.3.0.1785 Yowser/2.5 Safari/537.36', '2017-03-14 09:23:00', '0.9.1 beta', NULL),
(289, '10.210.28.150', '10.210.30.91', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 09:24:13', '0.9.1 beta', NULL),
(290, '10.210.28.150', '10.210.30.91', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-14 09:24:21', '0.9.1 beta', NULL),
(291, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0', '2017-03-14 09:33:49', '0.9.1 beta', NULL),
(292, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0', '2017-03-14 09:39:59', '0.9.1 beta', NULL),
(293, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0', '2017-03-14 09:40:14', '0.9.1 beta', NULL),
(294, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-29 09:18:33', '', NULL),
(295, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-29 09:22:29', '0.9.5', NULL),
(296, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-29 09:26:52', '0.9.5', 95100),
(297, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-29 10:01:02', '0.9.5', 95100),
(298, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-29 11:24:52', '0.9.5', 95100),
(299, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-29 11:26:22', '0.9.5', 95100),
(300, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-29 11:29:14', '0.9.5', 95100),
(301, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-29 11:30:46', '0.9.5', 95100),
(302, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-29 11:30:50', '0.9.5', 95100),
(303, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-29 11:31:11', '0.9.5', 95100),
(304, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-29 11:35:55', '0.9.5', 95100),
(305, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-29 11:36:29', '0.9.5', 95100),
(306, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-29 11:39:59', '0.9.5', 95100),
(307, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-29 11:40:16', '0.9.5', 95100),
(308, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-29 11:42:15', '0.9.5', 95100),
(309, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-29 11:44:05', '0.9.5', 95100),
(310, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-29 12:18:25', '0.9.5', 95100),
(311, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-29 12:19:39', '0.9.5', 95100),
(312, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-29 12:29:13', '0.9.5', 95100),
(313, '10.210.28.150', '10.210.30.91', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-29 12:29:19', '0.9.5', 95100),
(314, '10.210.28.150', '10.210.30.24', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 YaBrowser/17.3.1.840 Yowser/2.5 Safari/537.36', '2017-03-29 12:29:19', '0.9.5', 95100),
(315, '10.210.30.73', '', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.98 Safari/537.36 OPR/44.0.2510.857 (Edition Yx)', '2017-03-29 12:29:23', '0.9.5', 95100),
(316, '10.210.28.150', '10.210.30.91', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-29 12:34:10', '0.9.5', 95100),
(317, '10.210.28.150', '10.210.30.24', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 YaBrowser/17.3.1.840 Yowser/2.5 Safari/537.36', '2017-03-29 12:34:13', '0.9.5', 95100),
(318, '10.210.30.73', '', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.98 Safari/537.36 OPR/44.0.2510.857 (Edition Yx)', '2017-03-29 12:34:14', '0.9.5', 95100),
(319, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-29 12:34:15', '0.9.5', 95100),
(320, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-29 12:36:43', '0.9.5', 95100),
(321, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-29 12:38:25', '0.9.5', 95100),
(322, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0', '2017-03-30 03:58:18', '0.9.5', 95100),
(323, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0', '2017-03-30 03:58:44', '0.9.5', 95100),
(324, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0', '2017-03-30 03:59:56', '0.9.5', 95100),
(325, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0', '2017-03-30 04:33:12', '0.9.5', 95100),
(326, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0', '2017-03-30 06:18:38', '0.9.5', 95100),
(327, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0', '2017-03-30 07:01:16', '0.9.5', 95100),
(328, '10.210.30.73', '', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.98 Safari/537.36 OPR/44.0.2510.857 (Edition Yx)', '2017-03-30 07:41:11', '0.9.5', 95100),
(329, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0', '2017-03-30 09:23:37', '0.9.5', 95100),
(330, '10.210.28.150', '10.210.30.25', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 09:50:50', '0.9.5', 95100),
(331, '10.210.28.150', '10.210.30.25', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 09:55:46', '0.9.5', 95100),
(332, '10.210.28.150', '10.210.30.25', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 09:57:58', '0.9.5', 95100),
(333, '10.210.28.150', '10.210.30.25', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 09:58:34', '0.9.5', 95100),
(334, '10.210.28.150', '10.210.30.25', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 09:58:50', '0.9.5', 95100),
(335, '10.210.28.150', '10.210.30.25', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 09:59:58', '0.9.5', 95100),
(336, '10.210.28.150', '10.210.30.25', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 10:03:03', '0.9.5', 95100),
(337, '10.210.28.150', '10.210.30.25', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 10:04:36', '0.9.5', 95100),
(338, '10.210.28.150', '10.210.30.25', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 10:07:21', '0.9.5', 95100),
(339, '10.210.28.150', '10.210.30.25', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 10:07:57', '0.9.5', 95100),
(340, '10.210.28.150', '10.210.30.25', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 10:09:34', '0.9.5', 95100),
(341, '10.210.28.150', '10.210.30.25', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 10:12:11', '0.9.5', 95100),
(342, '10.210.28.150', '10.210.30.25', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 10:12:32', '0.9.5', 95100),
(343, '10.210.28.150', '10.210.30.25', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 10:13:18', '0.9.5', 95100),
(344, '10.210.28.150', '10.210.30.25', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 10:14:05', '0.9.5', 95100),
(345, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 10:24:02', '0.9.5', 95100),
(346, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 10:24:20', '0.9.5', 95100),
(347, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 10:25:35', '0.9.5', 95100),
(348, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 10:47:04', '0.9.5', 95100),
(349, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 10:53:03', '0.9.5', 95100),
(350, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0', '2017-03-30 10:55:27', '0.9.5', 95100),
(351, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 10:59:02', '0.9.5', 95100),
(352, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 10:59:11', '0.9.5', 95100),
(353, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 11:02:00', '0.9.5', 95100),
(354, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 11:13:09', '0.9.5', 95100),
(355, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 11:13:37', '0.9.5', 95100),
(356, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 11:15:18', '0.9.5', 95100),
(357, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0', '2017-03-30 11:16:14', '0.9.5', 95100),
(358, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 11:22:22', '0.9.5', 95100),
(359, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 11:41:06', '0.9.5', 95100),
(360, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 11:43:49', '0.9.5', 95100),
(361, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 11:44:06', '0.9.5', 95100),
(362, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 11:44:50', '0.9.5', 95100),
(363, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 11:49:07', '0.9.5', 95100),
(364, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 11:52:52', '0.9.5', 95100),
(365, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 11:56:45', '0.9.5', 95100),
(366, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 12:04:02', '0.9.5', 95100),
(367, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 12:05:01', '0.9.5', 95100),
(368, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 12:05:30', '0.9.5', 95100),
(369, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 12:05:32', '0.9.5', 95100),
(370, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 12:08:08', '0.9.5', 95100),
(371, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 12:08:22', '0.9.5', 95100),
(372, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 12:12:30', '0.9.5', 95100),
(373, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 12:13:25', '0.9.5', 95100),
(374, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 12:15:02', '0.9.5', 95100),
(375, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 12:16:30', '0.9.5', 95100),
(376, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 12:22:39', '0.9.5', 95100),
(377, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 12:22:45', '0.9.5', 95100),
(378, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 12:23:02', '0.9.5', 95100),
(379, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 12:28:41', '0.9.5', 95100),
(380, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 12:29:03', '0.9.5', 95100),
(381, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 12:38:10', '0.9.5', 95100),
(382, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 12:38:51', '0.9.5', 95100),
(383, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 12:42:20', '0.9.5', 95100),
(384, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 12:44:02', '0.9.5', 95100),
(385, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 12:45:11', '0.9.5', 95100),
(386, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 12:45:55', '0.9.5', 95100),
(387, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-30 12:47:00', '0.9.5', 95100),
(388, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0', '2017-03-31 03:56:55', '0.9.5', 95100),
(389, '10.210.28.150', '10.210.30.53', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586', '2017-03-31 04:56:08', '0.9.5', 95100),
(390, '10.210.28.150', '10.210.30.53', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586', '2017-03-31 04:56:16', '0.9.5', 95100),
(391, '10.210.28.150', '10.210.30.53', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586', '2017-03-31 04:56:43', '0.9.5', 95100),
(392, '10.210.28.150', '10.210.30.53', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-31 04:57:10', '0.9.5', 95100),
(393, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-31 05:16:13', '0.9.5', 95100),
(394, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-31 05:35:57', '0.9.5', 95100),
(395, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0', '2017-03-31 05:36:10', '0.9.5', 95100),
(396, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0', '2017-03-31 05:36:29', '0.9.5', 95100),
(397, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-31 05:38:31', '0.9.5', 95100),
(398, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-31 05:44:20', '0.9.5', 95100),
(399, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0', '2017-03-31 05:56:51', '0.9.5', 95100),
(400, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-31 06:06:47', '0.9.5', 95100),
(401, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-31 06:27:13', '0.9.5', 95100),
(402, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-31 06:29:52', '0.9.5', 95100),
(403, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-31 06:35:09', '0.9.5', 95100),
(404, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-31 06:40:17', '0.9.5', 95100),
(405, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-31 06:46:38', '0.9.5', 95100),
(406, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-31 06:47:49', '0.9.5', 95100),
(407, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-31 06:52:24', '0.9.5', 95100),
(408, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-31 07:01:46', '0.9.5', 95100),
(409, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-31 08:42:58', '0.9.5', 95100),
(410, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-31 08:50:01', '0.9.6', 95110),
(411, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0', '2017-03-31 08:51:16', '0.9.5', 95100),
(412, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0', '2017-03-31 08:51:38', '0.9.5', 95100),
(413, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0', '2017-03-31 08:52:53', '0.9.5', 95100),
(414, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0', '2017-03-31 08:55:16', '0.9.6', 95110),
(415, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0', '2017-03-31 08:56:27', '0.9.6', 95110),
(416, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0', '2017-03-31 09:05:52', '0.9.5', 95100),
(417, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-31 09:40:42', '0.9.6', 95110),
(418, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-31 09:41:46', '0.9.5', 95100),
(419, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-31 09:42:11', '0.9.5', 95100),
(420, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-31 09:42:16', '0.9.5', 95100),
(421, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0', '2017-03-31 09:46:52', '0.9.5', 95100),
(422, '10.210.28.150', '10.210.28.79', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:52.0) Gecko/20100101 Firefox/52.0', '2017-03-31 09:47:01', '0.9.5', 95100),
(423, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-31 10:06:42', '0.9.5', 95100),
(424, '10.210.28.150', '10.210.30.53', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-31 10:07:44', '0.9.6', 95110),
(425, '10.210.28.150', '10.210.30.91', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-31 10:07:49', '0.9.6', 95110),
(426, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-31 10:28:50', '0.9.6', 95110),
(427, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-31 10:30:03', '0.9.6', 95110),
(428, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-31 10:42:04', '0.9.6', 95110),
(429, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-31 10:59:27', '0.9.6', 95110),
(430, '10.210.30.73', '', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.98 Safari/537.36 OPR/44.0.2510.857 (Edition Yx)', '2017-03-31 11:07:29', '0.9.6', 95110),
(431, '10.210.30.73', '', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.98 Safari/537.36 OPR/44.0.2510.857 (Edition Yx)', '2017-03-31 11:08:41', '0.9.6', 95110),
(432, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-31 11:20:40', '0.9.6', 95110),
(433, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-31 11:21:42', '0.9.6', 95110),
(434, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36', '2017-03-31 11:22:04', '0.9.6', 95110),
(435, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0', '2017-03-31 11:23:15', '0.9.6', 95110),
(436, '10.210.28.150', '10.210.28.76', 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:51.0) Gecko/20100101 Firefox/51.0', '2017-03-31 11:25:05', '0.9.6', 95110);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `defferreload`
--
ALTER TABLE `defferreload`
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `ip` (`ip`);

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
-- Индексы таблицы `uniqueip`
--
ALTER TABLE `uniqueip`
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `ip` (`ip`);

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
-- AUTO_INCREMENT для таблицы `defferreload`
--
ALTER TABLE `defferreload`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
--
-- AUTO_INCREMENT для таблицы `status`
--
ALTER TABLE `status`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT для таблицы `uniqueip`
--
ALTER TABLE `uniqueip`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=166;
--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `user_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT для таблицы `visits`
--
ALTER TABLE `visits`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=437;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
