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
-- База данных: `es_respark`
--

-- --------------------------------------------------------

--
-- Структура таблицы `res1_hd`
--

CREATE TABLE `res1_hd` (
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `res1_hd`
--

INSERT INTO `res1_hd` (`level`, `plot`, `volume`, `temperature`, `vapor_temperature`, `mass`, `datetime`) VALUES
(1356.6, 755.2, 434.9, -50, -7.44, 328.4, '2017-02-22 06:13:56');

-- --------------------------------------------------------

--
-- Структура таблицы `res2_hd`
--

CREATE TABLE `res2_hd` (
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `res2_hd`
--

INSERT INTO `res2_hd` (`level`, `plot`, `volume`, `temperature`, `vapor_temperature`, `mass`, `datetime`) VALUES
(1687.8, 757.3, 529.9, 1, 1, 401.3, '2017-02-22 06:13:57');

-- --------------------------------------------------------

--
-- Структура таблицы `res3_hd`
--

CREATE TABLE `res3_hd` (
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `res3_hd`
--

INSERT INTO `res3_hd` (`level`, `plot`, `volume`, `temperature`, `vapor_temperature`, `mass`, `datetime`) VALUES
(5494.1, 754.8, 1873.4, 1, 15, 1414, '2017-02-22 06:13:57');

-- --------------------------------------------------------

--
-- Структура таблицы `res4_hd`
--

CREATE TABLE `res4_hd` (
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `res4_hd`
--

INSERT INTO `res4_hd` (`level`, `plot`, `volume`, `temperature`, `vapor_temperature`, `mass`, `datetime`) VALUES
(7570.5, 752.7, 2561.9, 1, 15, 1927.7, '2017-02-22 06:13:57');

-- --------------------------------------------------------

--
-- Структура таблицы `res5_hd`
--

CREATE TABLE `res5_hd` (
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `res5_hd`
--

INSERT INTO `res5_hd` (`level`, `plot`, `volume`, `temperature`, `vapor_temperature`, `mass`, `datetime`) VALUES
(1455.6, 766.9, 499, 17.49, 17.63, 382.6, '2017-02-22 06:13:58');

-- --------------------------------------------------------

--
-- Структура таблицы `res6_hd`
--

CREATE TABLE `res6_hd` (
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `res6_hd`
--

INSERT INTO `res6_hd` (`level`, `plot`, `volume`, `temperature`, `vapor_temperature`, `mass`, `datetime`) VALUES
(4116.6, 750, 1399.8, -50, 15, 1049.8, '2017-02-22 06:13:58');

-- --------------------------------------------------------

--
-- Структура таблицы `res7_hd`
--

CREATE TABLE `res7_hd` (
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `res7_hd`
--

INSERT INTO `res7_hd` (`level`, `plot`, `volume`, `temperature`, `vapor_temperature`, `mass`, `datetime`) VALUES
(3361.7, 758.5, 1142.3, -50, 15, 866.4, '2017-02-22 06:13:58');

-- --------------------------------------------------------

--
-- Структура таблицы `res8_hd`
--

CREATE TABLE `res8_hd` (
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `res8_hd`
--

INSERT INTO `res8_hd` (`level`, `plot`, `volume`, `temperature`, `vapor_temperature`, `mass`, `datetime`) VALUES
(3361.7, 768.5, 0, -50, 15, 0, '2017-02-22 06:13:58');

-- --------------------------------------------------------

--
-- Структура таблицы `res9_hd`
--

CREATE TABLE `res9_hd` (
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `res9_hd`
--

INSERT INTO `res9_hd` (`level`, `plot`, `volume`, `temperature`, `vapor_temperature`, `mass`, `datetime`) VALUES
(6817.4, 848.8, 2721.8, -8.88, 15, 2310.3, '2017-02-22 06:13:58');

-- --------------------------------------------------------

--
-- Структура таблицы `res10_hd`
--

CREATE TABLE `res10_hd` (
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `res10_hd`
--

INSERT INTO `res10_hd` (`level`, `plot`, `volume`, `temperature`, `vapor_temperature`, `mass`, `datetime`) VALUES
(6023.5, 838.4, 2438.1, 7.82, 15, 2044.2, '2017-02-22 06:13:59');

-- --------------------------------------------------------

--
-- Структура таблицы `res11_hd`
--

CREATE TABLE `res11_hd` (
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `res11_hd`
--

INSERT INTO `res11_hd` (`level`, `plot`, `volume`, `temperature`, `vapor_temperature`, `mass`, `datetime`) VALUES
(850.1, 860.5, 337.6, 7.82, 15, 290.5, '2017-02-22 06:13:59');

-- --------------------------------------------------------

--
-- Структура таблицы `res12_hd`
--

CREATE TABLE `res12_hd` (
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `res12_hd`
--

INSERT INTO `res12_hd` (`level`, `plot`, `volume`, `temperature`, `vapor_temperature`, `mass`, `datetime`) VALUES
(2566.8, 845.6, 1032.1, -8.9, 15, 872.8, '2017-02-22 06:14:00');

-- --------------------------------------------------------

--
-- Структура таблицы `res13_hd`
--

CREATE TABLE `res13_hd` (
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `res13_hd`
--

INSERT INTO `res13_hd` (`level`, `plot`, `volume`, `temperature`, `vapor_temperature`, `mass`, `datetime`) VALUES
(2402.7, 845.2, 977.7, -3.08, 15, 826.3, '2017-02-22 06:14:00');

-- --------------------------------------------------------

--
-- Структура таблицы `res14_hd`
--

CREATE TABLE `res14_hd` (
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `res14_hd`
--

INSERT INTO `res14_hd` (`level`, `plot`, `volume`, `temperature`, `vapor_temperature`, `mass`, `datetime`) VALUES
(1388.6, 878.8, 522.7, -12.66, -7.88, 459.4, '2017-02-22 06:14:00');

-- --------------------------------------------------------

--
-- Структура таблицы `res15_hd`
--

CREATE TABLE `res15_hd` (
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `res15_hd`
--

INSERT INTO `res15_hd` (`level`, `plot`, `volume`, `temperature`, `vapor_temperature`, `mass`, `datetime`) VALUES
(1703.3, 859.7, 681.8, -12.66, 15, 586.1, '2017-02-22 06:14:01');

-- --------------------------------------------------------

--
-- Структура таблицы `res16_hd`
--

CREATE TABLE `res16_hd` (
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `res16_hd`
--

INSERT INTO `res16_hd` (`level`, `plot`, `volume`, `temperature`, `vapor_temperature`, `mass`, `datetime`) VALUES
(1703.3, 844, 0, -12.66, 15, 0, '2017-02-22 06:14:01');

-- --------------------------------------------------------

--
-- Структура таблицы `res17_hd`
--

CREATE TABLE `res17_hd` (
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `res17_hd`
--

INSERT INTO `res17_hd` (`level`, `plot`, `volume`, `temperature`, `vapor_temperature`, `mass`, `datetime`) VALUES
(739.9, 887.7, 284.4, -12.66, 15, 252.4, '2017-02-22 06:14:02');

-- --------------------------------------------------------

--
-- Структура таблицы `res18_hd`
--

CREATE TABLE `res18_hd` (
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `res18_hd`
--

INSERT INTO `res18_hd` (`level`, `plot`, `volume`, `temperature`, `vapor_temperature`, `mass`, `datetime`) VALUES
(1956.8, 856.2, 802.6, -7.39, -7.38, 687.2, '2017-02-22 06:14:03');

-- --------------------------------------------------------

--
-- Структура таблицы `res19_hd`
--

CREATE TABLE `res19_hd` (
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `res19_hd`
--

INSERT INTO `res19_hd` (`level`, `plot`, `volume`, `temperature`, `vapor_temperature`, `mass`, `datetime`) VALUES
(8775.4, 848, 3544, 7.28, 5, 3005.3, '2017-02-22 06:14:03');

-- --------------------------------------------------------

--
-- Структура таблицы `res20_hd`
--

CREATE TABLE `res20_hd` (
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `res20_hd`
--

INSERT INTO `res20_hd` (`level`, `plot`, `volume`, `temperature`, `vapor_temperature`, `mass`, `datetime`) VALUES
(8775.4, 867.3, 0, -50, 5, 0, '2017-02-22 06:14:03');

-- --------------------------------------------------------

--
-- Структура таблицы `res51_hd`
--

CREATE TABLE `res51_hd` (
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `res51_hd`
--

INSERT INTO `res51_hd` (`level`, `plot`, `volume`, `temperature`, `vapor_temperature`, `mass`, `datetime`) VALUES
(6304.6, 753.2, 538.6, -5.13, -6.97, 405.7, '2017-02-22 06:14:04');

-- --------------------------------------------------------

--
-- Структура таблицы `res52_hd`
--

CREATE TABLE `res52_hd` (
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `res52_hd`
--

INSERT INTO `res52_hd` (`level`, `plot`, `volume`, `temperature`, `vapor_temperature`, `mass`, `datetime`) VALUES
(5887.1, 777.1, 502.5, -12.12, -7.31, 390.5, '2017-02-22 06:14:05');

-- --------------------------------------------------------

--
-- Структура таблицы `res53_hd`
--

CREATE TABLE `res53_hd` (
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `res53_hd`
--

INSERT INTO `res53_hd` (`level`, `plot`, `volume`, `temperature`, `vapor_temperature`, `mass`, `datetime`) VALUES
(5674.1, 834, 484.8, -13.77, 15, 404.3, '2017-02-22 06:14:06');

-- --------------------------------------------------------

--
-- Структура таблицы `res54_hd`
--

CREATE TABLE `res54_hd` (
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `res54_hd`
--

INSERT INTO `res54_hd` (`level`, `plot`, `volume`, `temperature`, `vapor_temperature`, `mass`, `datetime`) VALUES
(6073.7, 833, 520.5, -50, 15, 433.6, '2017-02-22 06:14:06');

-- --------------------------------------------------------

--
-- Структура таблицы `res55_hd`
--

CREATE TABLE `res55_hd` (
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `res55_hd`
--

INSERT INTO `res55_hd` (`level`, `plot`, `volume`, `temperature`, `vapor_temperature`, `mass`, `datetime`) VALUES
(1601.8, 767.6, 137.7, -14.2, 15, 105.7, '2017-02-22 06:14:07');

-- --------------------------------------------------------

--
-- Структура таблицы `res56_hd`
--

CREATE TABLE `res56_hd` (
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `res56_hd`
--

INSERT INTO `res56_hd` (`level`, `plot`, `volume`, `temperature`, `vapor_temperature`, `mass`, `datetime`) VALUES
(7126.4, 745.6, 610.5, -13.92, 15, 455.2, '2017-02-22 06:14:07');

-- --------------------------------------------------------

--
-- Структура таблицы `res69_hd`
--

CREATE TABLE `res69_hd` (
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `res69_hd`
--

INSERT INTO `res69_hd` (`level`, `plot`, `volume`, `temperature`, `vapor_temperature`, `mass`, `datetime`) VALUES
(2344.7, 783.9, 678.5, -12.35, 15, 531.9, '2017-02-22 06:14:08');

-- --------------------------------------------------------

--
-- Структура таблицы `res70_hd`
--

CREATE TABLE `res70_hd` (
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `res70_hd`
--

INSERT INTO `res70_hd` (`level`, `plot`, `volume`, `temperature`, `vapor_temperature`, `mass`, `datetime`) VALUES
(0, 763.2, 0, -0.71, -0.71, 0, '2017-02-22 06:14:09');

-- --------------------------------------------------------

--
-- Структура таблицы `res71_hd`
--

CREATE TABLE `res71_hd` (
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `res71_hd`
--

INSERT INTO `res71_hd` (`level`, `plot`, `volume`, `temperature`, `vapor_temperature`, `mass`, `datetime`) VALUES
(0, 740.2, 23.6, 0, -2.88, 17.5, '2017-02-22 06:14:09');

-- --------------------------------------------------------

--
-- Структура таблицы `res72_hd`
--

CREATE TABLE `res72_hd` (
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `res72_hd`
--

INSERT INTO `res72_hd` (`level`, `plot`, `volume`, `temperature`, `vapor_temperature`, `mass`, `datetime`) VALUES
(0, 759, 0, -8.13, 0, 0, '2017-02-22 06:14:10');

-- --------------------------------------------------------

--
-- Структура таблицы `res73_hd`
--

CREATE TABLE `res73_hd` (
  `level` float NOT NULL,
  `plot` float NOT NULL,
  `volume` float NOT NULL,
  `temperature` float NOT NULL,
  `vapor_temperature` float NOT NULL,
  `mass` float NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `res73_hd`
--

INSERT INTO `res73_hd` (`level`, `plot`, `volume`, `temperature`, `vapor_temperature`, `mass`, `datetime`) VALUES
(0, 758, 0, -7.91, 15, 0, '2017-02-22 06:14:10');

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
