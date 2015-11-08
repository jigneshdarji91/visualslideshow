-- phpMyAdmin SQL Dump
-- version 4.5.0.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 08, 2015 at 04:59 PM
-- Server version: 10.0.17-MariaDB
-- PHP Version: 5.6.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `HD15_sunburst`
--

-- --------------------------------------------------------

--
-- Table structure for table `charts`
--

CREATE TABLE `charts` (
  `user` varchar(20) NOT NULL,
  `chart_id` int(11) NOT NULL,
  `chart_name` varchar(40) NOT NULL,
  `chart_json` mediumtext NOT NULL,
  `created_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `charts`
--

INSERT INTO `charts` (`user`, `chart_id`, `chart_name`, `chart_json`, `created_dt`) VALUES
('dhaval', 1, 'OS Chart', '{  "name": "flare",  "children": [   {    "name": "DUTTA",    "children": [     {      "name": "cluster",      "children": [       {"name": "AgglomerativeCluster", "size": 3938},       {"name": "CommunityStructure", "size": 3812},       {"name": "MergeEdge", "size": 743}      ]     },     {      "name": "graph",      "children": [       {"name": "BetweennessCentrality", "size": 3534},       {"name": "LinkDistance", "size": 5731,       "description": "SampleDesc"}      ]     }    ]   }  ] }', '2015-11-07 22:37:15'),
('jignesh', 6, 'Internet Protocol', '{\r\n "name": "Internet Protocols",\r\n "children": [\r\n  {\r\n   "name": "analytics",\r\n   "children": [\r\n    {\r\n     "name": "cluster",\r\n     "children": [\r\n      {"name": "AgglomerativeCluster", "size": 3938,"description": "Agglo"},\r\n      {"name": "CommunityStructure", "size": 3812,"description": "Community Service"},\r\n      {"name": "MergeEdge", "size": 743,"description": "Merging Edges"}\r\n     ]\r\n    },\r\n    {\r\n     "name": "graph",\r\n     "children": [\r\n      {"name": "BetweennessCentrality", "size": 3534,"description": "Central Everywhere"},\r\n      {"name": "LinkDistance", "size": 5731,"description": "Long Distance"}\r\n     ]\r\n    }\r\n   ]\r\n  }\r\n ]\r\n}', '2015-11-08 15:57:01');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `password`) VALUES
('dhaval', 'password'),
('jignesh', 'jignesh'),
('rohit', 'rohit'),
('rahul', 'rahul');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `charts`
--
ALTER TABLE `charts`
  ADD PRIMARY KEY (`chart_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `charts`
--
ALTER TABLE `charts`
  MODIFY `chart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
