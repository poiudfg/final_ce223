-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 11, 2022 at 03:36 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodejs_lottery`
--

-- --------------------------------------------------------

--
-- Table structure for table `earlyapril`
--

CREATE TABLE `earlyapril` (
  `id` bigint(20) NOT NULL,
  `reward` text NOT NULL,
  `pass` text NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `earlyapril`
--

INSERT INTO `earlyapril` (`id`, `reward`, `pass`, `description`) VALUES
(123, 'รางวัลที่ 1 ', '970618', ''),
(126, 'รางวัลที่ 3 ', '027001', ''),
(127, 'รางวัลที่ 3 ', '036686', ''),
(128, 'รางวัลที่ 3 ', '046457', ''),
(129, 'รางวัลที่ 3 ', '050015', ''),
(130, 'รางวัลที่ 3 ', '054035', ''),
(131, 'รางวัลที่ 3 ', '127728', ''),
(132, 'รางวัลที่ 3 ', '440807', ''),
(133, 'รางวัลที่ 3 ', '559912', ''),
(134, 'รางวัลที่ 3 ', '563497', ''),
(135, 'รางวัลที่ 3 ', '703812', ''),
(136, 'รางวัลเลขท้าย 3 ตัว', '578', ''),
(137, 'รางวัลเลขท้าย 3 ตัว', '870', '');

-- --------------------------------------------------------

--
-- Table structure for table `midapril`
--

CREATE TABLE `midapril` (
  `id` bigint(20) NOT NULL,
  `reward` varchar(255) NOT NULL,
  `pass` text NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `midapril`
--

INSERT INTO `midapril` (`id`, `reward`, `pass`, `description`) VALUES
(123, 'รางวัลที่ 1 ', '395919', ''),
(126, 'รางวัลที่ 3', '103342', ''),
(127, 'รางวัลที่ 3', '158303', ''),
(128, 'รางวัลที่ 3', '358202', ''),
(129, 'รางวัลที่ 3', '542136', ''),
(130, 'รางวัลที่ 3', '642745', ''),
(131, 'รางวัลที่ 3', '644686', ''),
(132, 'รางวัลที่ 3', '720279', ''),
(133, 'รางวัลที่ 3', '757881', ''),
(134, 'รางวัลที่ 3', '768711', ''),
(135, 'รางวัลที่ 3', '953929', ''),
(136, 'รางวัลเลขท้าย 3 ตัว ', '413', ''),
(137, 'รางวัลเลขท้าย 3 ตัว ', '508', '');

-- --------------------------------------------------------

--
-- Table structure for table `midmar`
--

CREATE TABLE `midmar` (
  `id` bigint(20) NOT NULL,
  `reward` varchar(255) NOT NULL,
  `pass` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `midmar`
--

INSERT INTO `midmar` (`id`, `reward`, `pass`) VALUES
(50, 'รางวัลที่ 1 ', '737867'),
(51, 'รางวัลที่ 3', '362277'),
(52, 'รางวัลที่ 3', '003392'),
(53, 'รางวัลที่ 3', '920401'),
(54, 'รางวัลที่ 3', '708219'),
(55, 'รางวัลที่ 3', '344527'),
(56, 'รางวัลที่ 3', '129232'),
(57, 'รางวัลที่ 3', '826066'),
(58, 'รางวัลที่ 3', '315090'),
(59, 'รางวัลที่ 3', '020974'),
(60, 'รางวัลที่ 3', '141817'),
(61, 'รางวัลเลขท้าย 3 ตัว', '788'),
(62, 'รางวัลเลขท้าย 3 ตัว', '989');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `earlyapril`
--
ALTER TABLE `earlyapril`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `midapril`
--
ALTER TABLE `midapril`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `midmar`
--
ALTER TABLE `midmar`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `earlyapril`
--
ALTER TABLE `earlyapril`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=138;

--
-- AUTO_INCREMENT for table `midapril`
--
ALTER TABLE `midapril`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=138;

--
-- AUTO_INCREMENT for table `midmar`
--
ALTER TABLE `midmar`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=920402;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
