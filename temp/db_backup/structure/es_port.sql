-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Окт 18 2017 г., 16:30
-- Версия сервера: 5.7.19-0ubuntu0.16.04.1
-- Версия PHP: 7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `es_port`
--

-- --------------------------------------------------------

--
-- Структура таблицы `plotnomer1`
--

CREATE TABLE `plotnomer1` (
  `id` bigint(20) UNSIGNED NOT NULL,
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
  `lz1` double DEFAULT NULL,
  `lz2` double DEFAULT NULL,
  `fixtime` text NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `plotnomer2`
--

CREATE TABLE `plotnomer2` (
  `id` bigint(20) UNSIGNED NOT NULL,
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
  `lz1` double DEFAULT NULL,
  `lz2` double DEFAULT NULL,
  `fixtime` text NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `plotnomer1`
--
ALTER TABLE `plotnomer1`
  ADD UNIQUE KEY `id` (`id`);

--
-- Индексы таблицы `plotnomer2`
--
ALTER TABLE `plotnomer2`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `plotnomer1`
--
ALTER TABLE `plotnomer1`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=216577;
--
-- AUTO_INCREMENT для таблицы `plotnomer2`
--
ALTER TABLE `plotnomer2`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=212435;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
