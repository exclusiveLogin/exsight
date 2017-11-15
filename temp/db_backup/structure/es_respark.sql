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
-- База данных: `es_respark`
--

-- --------------------------------------------------------

--
-- Структура таблицы `res1_hd`
--

CREATE TABLE `res1_hd` (
  `num` int(11) NOT NULL DEFAULT '1',
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `res2_hd`
--

CREATE TABLE `res2_hd` (
  `num` int(11) NOT NULL DEFAULT '2',
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `res3_hd`
--

CREATE TABLE `res3_hd` (
  `num` int(11) NOT NULL DEFAULT '3',
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `res4_hd`
--

CREATE TABLE `res4_hd` (
  `num` int(11) NOT NULL DEFAULT '4',
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `res5_hd`
--

CREATE TABLE `res5_hd` (
  `num` int(11) NOT NULL DEFAULT '5',
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `res6_hd`
--

CREATE TABLE `res6_hd` (
  `num` int(11) NOT NULL DEFAULT '6',
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `res7_hd`
--

CREATE TABLE `res7_hd` (
  `num` int(11) NOT NULL DEFAULT '7',
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `res8_hd`
--

CREATE TABLE `res8_hd` (
  `num` int(11) NOT NULL DEFAULT '8',
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `res9_hd`
--

CREATE TABLE `res9_hd` (
  `num` int(11) NOT NULL DEFAULT '9',
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `res10_hd`
--

CREATE TABLE `res10_hd` (
  `num` int(11) NOT NULL DEFAULT '10',
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `res11_hd`
--

CREATE TABLE `res11_hd` (
  `num` int(11) NOT NULL DEFAULT '11',
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `res12_hd`
--

CREATE TABLE `res12_hd` (
  `num` int(11) NOT NULL DEFAULT '12',
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `res13_hd`
--

CREATE TABLE `res13_hd` (
  `num` int(11) NOT NULL DEFAULT '13',
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `res14_hd`
--

CREATE TABLE `res14_hd` (
  `num` int(11) NOT NULL DEFAULT '14',
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `res15_hd`
--

CREATE TABLE `res15_hd` (
  `num` int(11) NOT NULL DEFAULT '15',
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `res16_hd`
--

CREATE TABLE `res16_hd` (
  `num` int(11) NOT NULL DEFAULT '16',
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `res17_hd`
--

CREATE TABLE `res17_hd` (
  `num` int(11) NOT NULL DEFAULT '17',
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `res18_hd`
--

CREATE TABLE `res18_hd` (
  `num` int(11) NOT NULL DEFAULT '18',
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `res19_hd`
--

CREATE TABLE `res19_hd` (
  `num` int(11) NOT NULL DEFAULT '19',
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `res20_hd`
--

CREATE TABLE `res20_hd` (
  `num` int(11) NOT NULL DEFAULT '20',
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `res51_hd`
--

CREATE TABLE `res51_hd` (
  `num` int(11) NOT NULL DEFAULT '51',
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `res52_hd`
--

CREATE TABLE `res52_hd` (
  `num` int(11) NOT NULL DEFAULT '52',
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `res53_hd`
--

CREATE TABLE `res53_hd` (
  `num` int(11) NOT NULL DEFAULT '53',
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `res54_hd`
--

CREATE TABLE `res54_hd` (
  `num` int(11) NOT NULL DEFAULT '54',
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `res55_hd`
--

CREATE TABLE `res55_hd` (
  `num` int(11) DEFAULT '55',
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `res56_hd`
--

CREATE TABLE `res56_hd` (
  `num` int(11) NOT NULL DEFAULT '56',
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `res69_hd`
--

CREATE TABLE `res69_hd` (
  `num` int(11) NOT NULL DEFAULT '69',
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `res70_hd`
--

CREATE TABLE `res70_hd` (
  `num` int(11) NOT NULL DEFAULT '70',
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `res71_hd`
--

CREATE TABLE `res71_hd` (
  `num` int(11) NOT NULL DEFAULT '71',
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `res72_hd`
--

CREATE TABLE `res72_hd` (
  `num` int(11) NOT NULL DEFAULT '72',
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `res73_hd`
--

CREATE TABLE `res73_hd` (
  `num` int(11) NOT NULL DEFAULT '73',
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `res1_hd`
--
ALTER TABLE `res1_hd`
  ADD UNIQUE KEY `datetime` (`datetime`);

--
-- Индексы таблицы `res2_hd`
--
ALTER TABLE `res2_hd`
  ADD UNIQUE KEY `datetime` (`datetime`);

--
-- Индексы таблицы `res3_hd`
--
ALTER TABLE `res3_hd`
  ADD UNIQUE KEY `datetime` (`datetime`);

--
-- Индексы таблицы `res4_hd`
--
ALTER TABLE `res4_hd`
  ADD UNIQUE KEY `datetime` (`datetime`);

--
-- Индексы таблицы `res5_hd`
--
ALTER TABLE `res5_hd`
  ADD UNIQUE KEY `datetime` (`datetime`);

--
-- Индексы таблицы `res6_hd`
--
ALTER TABLE `res6_hd`
  ADD UNIQUE KEY `datetime` (`datetime`);

--
-- Индексы таблицы `res7_hd`
--
ALTER TABLE `res7_hd`
  ADD UNIQUE KEY `datetime` (`datetime`);

--
-- Индексы таблицы `res8_hd`
--
ALTER TABLE `res8_hd`
  ADD UNIQUE KEY `datetime` (`datetime`);

--
-- Индексы таблицы `res9_hd`
--
ALTER TABLE `res9_hd`
  ADD UNIQUE KEY `datetime` (`datetime`);

--
-- Индексы таблицы `res10_hd`
--
ALTER TABLE `res10_hd`
  ADD UNIQUE KEY `datetime` (`datetime`);

--
-- Индексы таблицы `res11_hd`
--
ALTER TABLE `res11_hd`
  ADD UNIQUE KEY `datetime` (`datetime`);

--
-- Индексы таблицы `res12_hd`
--
ALTER TABLE `res12_hd`
  ADD UNIQUE KEY `datetime` (`datetime`);

--
-- Индексы таблицы `res13_hd`
--
ALTER TABLE `res13_hd`
  ADD UNIQUE KEY `datetime` (`datetime`);

--
-- Индексы таблицы `res14_hd`
--
ALTER TABLE `res14_hd`
  ADD UNIQUE KEY `datetime` (`datetime`);

--
-- Индексы таблицы `res15_hd`
--
ALTER TABLE `res15_hd`
  ADD UNIQUE KEY `datetime` (`datetime`);

--
-- Индексы таблицы `res16_hd`
--
ALTER TABLE `res16_hd`
  ADD UNIQUE KEY `datetime` (`datetime`);

--
-- Индексы таблицы `res17_hd`
--
ALTER TABLE `res17_hd`
  ADD UNIQUE KEY `datetime` (`datetime`);

--
-- Индексы таблицы `res18_hd`
--
ALTER TABLE `res18_hd`
  ADD UNIQUE KEY `datetime` (`datetime`);

--
-- Индексы таблицы `res19_hd`
--
ALTER TABLE `res19_hd`
  ADD UNIQUE KEY `datetime` (`datetime`);

--
-- Индексы таблицы `res20_hd`
--
ALTER TABLE `res20_hd`
  ADD UNIQUE KEY `datetime` (`datetime`);

--
-- Индексы таблицы `res51_hd`
--
ALTER TABLE `res51_hd`
  ADD UNIQUE KEY `datetime` (`datetime`);

--
-- Индексы таблицы `res52_hd`
--
ALTER TABLE `res52_hd`
  ADD UNIQUE KEY `datetime` (`datetime`);

--
-- Индексы таблицы `res53_hd`
--
ALTER TABLE `res53_hd`
  ADD UNIQUE KEY `datetime` (`datetime`);

--
-- Индексы таблицы `res54_hd`
--
ALTER TABLE `res54_hd`
  ADD UNIQUE KEY `datetime` (`datetime`);

--
-- Индексы таблицы `res55_hd`
--
ALTER TABLE `res55_hd`
  ADD UNIQUE KEY `datetime` (`datetime`);

--
-- Индексы таблицы `res56_hd`
--
ALTER TABLE `res56_hd`
  ADD UNIQUE KEY `datetime` (`datetime`);

--
-- Индексы таблицы `res69_hd`
--
ALTER TABLE `res69_hd`
  ADD UNIQUE KEY `datetime` (`datetime`);

--
-- Индексы таблицы `res70_hd`
--
ALTER TABLE `res70_hd`
  ADD UNIQUE KEY `datetime` (`datetime`);

--
-- Индексы таблицы `res71_hd`
--
ALTER TABLE `res71_hd`
  ADD UNIQUE KEY `datetime` (`datetime`);

--
-- Индексы таблицы `res72_hd`
--
ALTER TABLE `res72_hd`
  ADD UNIQUE KEY `datetime` (`datetime`);

--
-- Индексы таблицы `res73_hd`
--
ALTER TABLE `res73_hd`
  ADD UNIQUE KEY `datetime` (`datetime`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
