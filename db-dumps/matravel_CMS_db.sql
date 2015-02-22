-- phpMyAdmin SQL Dump
-- version 4.2.0
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 22, 2015 at 10:23 PM
-- Server version: 5.6.17
-- PHP Version: 5.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `matravel_CMS_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking_sites`
--

CREATE TABLE IF NOT EXISTS `booking_sites` (
`bsid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `body` text NOT NULL,
  `url` varchar(255) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `booking_sites`
--

INSERT INTO `booking_sites` (`bsid`, `name`, `body`, `url`, `created`) VALUES
(1, 'momondo.se', 'momondo.se is a free site that compares millions of prices on airline tickets, hotels, rental cars, resorts and last minute travel. We also guides users to find travel and experiences that fit their personal needs.', 'http://www.momondo.se/', '2015-02-09 21:10:30'),
(2, 'flygresor.se', 'Compare prices on flight tickets to worldwide. A search on Flygresor.se shows travel from over 35 travel agents and over 900 airlines. We help you to find the ticket to the lowest price.', 'http://www.flygresor.se/', '2015-02-09 21:11:21'),
(3, 'resfeber.se', 'Want to make a reality of the trip of your dreams, then you have come to the right. In resfeber.se, you can put together and book your trip whether you are seeking adventure, city life or ashore. A flexible package, uniquely designed by you.', 'http://www.resfeber.se/', '2015-02-09 21:13:20');

-- --------------------------------------------------------

--
-- Table structure for table `contact_info`
--

CREATE TABLE IF NOT EXISTS `contact_info` (
`ciid` int(11) NOT NULL,
  `name` varchar(225) NOT NULL,
  `description` text,
  `tel` varchar(225) NOT NULL,
  `email` varchar(225) NOT NULL,
  `address` text,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `contact_info`
--

INSERT INTO `contact_info` (`ciid`, `name`, `description`, `tel`, `email`, `address`, `created`) VALUES
(1, 'Mohammed Ali', 'Matravel Manager', '0720554261', 'm.aliaa@live.com', 'Södervärn 21, 21378, Malmö', '2015-02-09 21:09:25');

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE IF NOT EXISTS `countries` (
`cid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `body` text NOT NULL,
  `history` text NOT NULL,
  `geography` text NOT NULL,
  `climate` text NOT NULL,
  `capital_name` varchar(255) NOT NULL,
  `capital_body` text NOT NULL,
  `top1_name` varchar(255) NOT NULL,
  `top1_body` text NOT NULL,
  `top2_name` varchar(255) NOT NULL,
  `top2_body` text NOT NULL,
  `top3_name` varchar(255) NOT NULL,
  `top3_body` text NOT NULL,
  `top4_name` varchar(255) NOT NULL,
  `top4_body` text NOT NULL,
  `top5_name` varchar(255) NOT NULL,
  `top5_body` text NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`cid`, `name`, `body`, `history`, `geography`, `climate`, `capital_name`, `capital_body`, `top1_name`, `top1_body`, `top2_name`, `top2_body`, `top3_name`, `top3_body`, `top4_name`, `top4_body`, `top5_name`, `top5_body`, `created`) VALUES
(2, 'Sweden', 'Sweden officially the Kingdom of Sweden is a Scandinavian country in Northern Europe. Sweden borders Norway and Finland, and is connected to Denmark by a bridge-tunnel across the Øresund. At 450,295 square kilometres (173,860 sq mi), Sweden is the third-largest country in the European Union by area, with a total population of about 9.7 million.', 'Sweden’s prehistory begins in the Allerød oscillation, a warm period around 12,000 BC, with Late Palaeolithic reindeer-hunting camps of the Bromme culture at the edge of the ice in what is now the country’s southernmost province. This period was characterised by small bands of hunter-gatherer-fishers using flint technology.', 'Situated in Northern Europe, Sweden lies west of the Baltic Sea and Gulf of Bothnia, providing a long coastline, and forms the eastern part of the Scandinavian Peninsula. To the west is the Scandinavian mountain chain (Skanderna), a range that separates Sweden from Norway. Finland is located to its north-east. It has maritime borders with Denmark, Germany, Poland, Russia, Lithuania, Latvia and Estonia, and it is also linked to Denmark (south-west) by the Öresund Bridge.', 'Situated in Northern Europe, Sweden lies west of the Baltic Sea and Gulf of Bothnia, providing a long coastline, and forms the eastern part of the Scandinavian Peninsula. To the west is the Scandinavian mountain chain (Skanderna), a range that separates Sweden from Norway. Finland is located to its north-east. It has maritime borders with Denmark, Germany, Poland, Russia, Lithuania, Latvia and Estonia, and it is also linked to Denmark (south-west) by the Öresund Bridge.', 'Stockholm', 'Stockholm is widely celebrated not only as the capital of Scandinavia, but also as one of the world’s most beautiful cities, built where lake meets sea, on fourteen islands, with ten centuries of history and culture.', 'Stockholm', 'Stockholm is widely celebrated not only as the capital of Scandinavia, but also as one of the world’s most beautiful cities, built where lake meets sea, on fourteen islands, with ten centuries of history and culture.', 'Gothenburg', 'City breaks don’t often come more perfect than they do in small, beautiful Gothenburg, the capital of West Sweden. Here you can discover quaint canals, the cobbled streets of historical Haga and countless green open spaces, including Sweden’s biggest botanical garden, boasting over 16,000 species.', 'Malmö', 'Malmö is the biggest city in Skåne and a multi-cultural place full of energy. In recent years, Malmö has developed into an exciting city with a focus on cultural offerings, innovative architecture and a strong organic social character. Malmö was certified as Sweden’s first Fairtrade City in 2006 and this has spurred the city’s organic and fair trade offerings.', 'Icehotel', 'Located in Jukkasjärv, ICEHOTEL is the world’s largest hotel made of ice and snow. The 5,500 square meter complex includes an Ice church and an Icebar. It is constructed anew every November-December and melts in April-May, but you can, of course, visit the area all year round.', 'Kosterhavet', 'Sweden’s first Marine National Park, Kosterhavet is centred around the car-free Koster Islands, only a two-hour drive up the lovely coast from Gothenburg. Once on the Kosters, you’ll see small fishing villages surrounded by an amazingly beautiful landscape, with many different plants and flowers.', '2015-02-17 23:23:37'),
(5, 'United-Kingdom', 'The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK) or Britain, is a sovereign state located off the northwestern coast of continental Europe.', 'Settlement by anatomically modern humans of what was to become the United Kingdom occurred in waves beginning by about 30,000 years ago. By the end of the regions prehistoric period. the population is thought to have belonged, in the main, to a culture termed Insular Celtic, comprising Brythonic Britain and Gaelic Ireland. The Roman conquest, beginning in 43 AD, and the 400-year rule of southern Britain, was followed by an invasion by Germanic Anglo-Saxon settlers, reducing the Brythonic area mainly to what was to become Wales and the historic Kingdom of Strathclyde. Most of the region settled by the Anglo-Saxons became unified as the Kingdom of England in the 10th century.', 'The total area of the United Kingdom is approximately 243,610 square kilometres (94,060 sq mi). The country occupies the major part of the British Isles archipelago and includes the island of Great Britain, the northeastern one-sixth of the island of Ireland and some smaller surrounding islands. It lies between the North Atlantic Ocean and the North Sea with the south-east coast coming within 22 miles (35 km) of the coast of northern France, from which it is separated by the English Channel. In 1993 10% of the UK was forested, 46% used for pastures and 25% cultivated for agriculture. The Royal Greenwich Observatory in London is the defining point of the Prime Meridian.', 'The United Kingdom has a temperate climate, with plentiful rainfall all year round. The temperature varies with the seasons seldom dropping below −11 °C (12 °F) or rising above 35 °C (95 °F). The prevailing wind is from the south-west and bears frequent spells of mild and wet weather from the Atlantic Ocean, although the eastern parts are mostly sheltered from this wind since the majority of the rain falls over the western regions the eastern parts are therefore the driest. Atlantic currents, warmed by the Gulf Stream, bring mild winters; especially in the west where winters are wet and even more so over high ground. Summers are warmest in the south-east of England, being closest to the European mainland, and coolest in the north.', 'London', 'London is the capital city of England and the United Kingdom. It is the most populous city in the United Kingdom with a metropolitan area of over 13 million inhabitants. Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium. Londons ancient core, the City of London, largely retains its 1.12-square-mile (2.9 km2) mediaeval boundaries and in 2011 had a resident population of 7,375, making it the smallest city in England. Since at least the 19th century, the term London has also referred to the metropolis developed around this core. The bulk of this conurbation forms the Greater London administrative area (coterminous with the London region), governed by the Mayor of London and the London Assembly.', 'Stonehenge', 'One of top tourist attractions in England, Stonehenge is among the most important prehistoric sites in the world. It was produced by a culture that left no written records so many aspects of Stonehenge remain subject to debate.', 'Big Ben', 'Big Ben is the nickname for the Great Bell of the clock at the north end of the Palace of Westminster in London, and often extended to refer to the clock and the clock tower. The tower is officially known as the Elizabeth Tower, renamed as such to celebrate the Diamond Jubilee of Elizabeth II (prior to being renamed in 2012 it was known as simply "Clock Tower"). The tower holds the second largest four-faced chiming clock in the world (Minneapolis City Hall being the first). The tower was completed in 1858 and had its 150th anniversary on 31 May 2009, during which celebratory events took place. The tower has become one of the most prominent symbols of the United Kingdom and is often in the establishing shot of films set in London.', 'Windsor Castle', 'Windsor Castle is a royal residence at Windsor in the English county of Berkshire. The castle is notable for its long association with the English and later British royal family and also for its architecture. The original castle was built in the 11th century after the Norman invasion by William the Conqueror. Since the time of Henry I, it has been used by succeeding monarchs and is the longest-occupied palace in Europe.', 'York Minster', 'York Minster is the cathedral of York, England, and is one of the largest of its kind in Northern Europe. The minster is the seat of the Archbishop of York, the second-highest office of the Church of England, and is the cathedral for the Diocese of York. It is run by a dean and chapter, under the Dean of York. The formal title of York Minster is "The Cathedral and Metropolitical Church of St Peter in York".', 'York Hadrians Wall', 'Hadrian’s Wall was built by the Romans to protect their colony Britannia from the tribes in Scotland. It stretches for 117 kilometers (73 miles) across the north of England from the Irish Sea to the North Sea. Construction started in 122 AD following a visit by Roman Emperor Hadrian, and was largely completed within six years. Today only stretches of this famous wall are still visible. There is a national path that follows the whole length of the wall from Wallsend to Bowness-on-Solway.', '2015-02-18 09:05:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking_sites`
--
ALTER TABLE `booking_sites`
 ADD PRIMARY KEY (`bsid`);

--
-- Indexes for table `contact_info`
--
ALTER TABLE `contact_info`
 ADD PRIMARY KEY (`ciid`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
 ADD PRIMARY KEY (`cid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booking_sites`
--
ALTER TABLE `booking_sites`
MODIFY `bsid` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `contact_info`
--
ALTER TABLE `contact_info`
MODIFY `ciid` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
