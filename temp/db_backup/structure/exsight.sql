-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Ноя 21 2017 г., 15:13
-- Версия сервера: 5.7.20-0ubuntu0.16.04.1
-- Версия PHP: 7.0.22-0ubuntu0.16.04.1

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
-- Структура таблицы `asn2load`
--

CREATE TABLE `asn2load` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `value` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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

-- --------------------------------------------------------

--
-- Структура таблицы `meteo`
--

CREATE TABLE `meteo` (
  `id` int(11) NOT NULL DEFAULT '1',
  `wind_p` float DEFAULT NULL,
  `wind_nb` float DEFAULT NULL,
  `wind_direction` int(11) NOT NULL,
  `temperature_air` float DEFAULT NULL,
  `fixtime` text,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `port_ecu`
--

CREATE TABLE `port_ecu` (
  `num` int(11) NOT NULL,
  `level1` tinyint(1) DEFAULT NULL,
  `level2` tinyint(1) DEFAULT NULL,
  `level3` tinyint(1) DEFAULT NULL,
  `level4` tinyint(1) DEFAULT NULL,
  `level5` tinyint(1) DEFAULT NULL,
  `level6` tinyint(1) DEFAULT NULL,
  `fixtime` text,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `port_plotnomer`
--

CREATE TABLE `port_plotnomer` (
  `num` int(11) NOT NULL,
  `t` double DEFAULT NULL,
  `t1` double DEFAULT NULL,
  `t2` double DEFAULT NULL,
  `p` double DEFAULT NULL,
  `p1` double DEFAULT NULL,
  `p2` double DEFAULT NULL,
  `f1` double DEFAULT NULL,
  `f2` double DEFAULT NULL,
  `m1` double DEFAULT NULL,
  `m2` double DEFAULT NULL,
  `ms1` double DEFAULT NULL,
  `ms2` double DEFAULT NULL,
  `fixtime` text NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `port_tankselect`
--

CREATE TABLE `port_tankselect` (
  `id` int(11) NOT NULL,
  `tanksmt` int(11) DEFAULT NULL,
  `tankoil` int(11) DEFAULT NULL,
  `tankdt` int(11) DEFAULT NULL,
  `fixtime` text NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `port_valve`
--

CREATE TABLE `port_valve` (
  `id` int(11) NOT NULL,
  `valve_smt1` tinyint(1) DEFAULT NULL,
  `valve_smt2` tinyint(1) DEFAULT NULL,
  `valve_oil1` tinyint(1) DEFAULT NULL,
  `valve_oil2` tinyint(1) DEFAULT NULL,
  `valve_dt1` tinyint(1) DEFAULT NULL,
  `valve_dt2` tinyint(1) DEFAULT NULL,
  `fixtime` text,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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

-- --------------------------------------------------------

--
-- Структура таблицы `status`
--

CREATE TABLE `status` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `state` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `sector` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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

-- --------------------------------------------------------

--
-- Структура таблицы `visits`
--

CREATE TABLE `visits` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `ip` varchar(16) NOT NULL,
  `rip` varchar(16) NOT NULL,
  `ua` text NOT NULL,
  `remote_port` varchar(10) NOT NULL,
  `path` text NOT NULL,
  `doc_root` text NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `ver` varchar(10) NOT NULL,
  `build` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='тут хранятся визиты пользователей';

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `asn2load`
--
ALTER TABLE `asn2load`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `defferreload`
--
ALTER TABLE `defferreload`
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `ip` (`ip`);

--
-- Индексы таблицы `meteo`
--
ALTER TABLE `meteo`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `port_ecu`
--
ALTER TABLE `port_ecu`
  ADD PRIMARY KEY (`num`);

--
-- Индексы таблицы `port_plotnomer`
--
ALTER TABLE `port_plotnomer`
  ADD PRIMARY KEY (`num`);

--
-- Индексы таблицы `port_tankselect`
--
ALTER TABLE `port_tankselect`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `port_valve`
--
ALTER TABLE `port_valve`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT для таблицы `asn2load`
--
ALTER TABLE `asn2load`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1010279;
--
-- AUTO_INCREMENT для таблицы `defferreload`
--
ALTER TABLE `defferreload`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=184;
--
-- AUTO_INCREMENT для таблицы `status`
--
ALTER TABLE `status`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT для таблицы `uniqueip`
--
ALTER TABLE `uniqueip`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2868;
--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `user_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT для таблицы `visits`
--
ALTER TABLE `visits`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4175;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
