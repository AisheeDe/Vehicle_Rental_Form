CREATE DATABASE IF NOT EXISTS vehicle_booking;
USE vehicle_booking;

CREATE TABLE IF NOT EXISTS vehicle_types (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  wheels INT NOT NULL
);

CREATE TABLE IF NOT EXISTS vehicles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  model VARCHAR(50) NOT NULL,
  vehicle_type_id INT,
  FOREIGN KEY (vehicle_type_id) REFERENCES vehicle_types(id)
);

CREATE TABLE IF NOT EXISTS bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  vehicle_id INT,
  start_date DATE,
  end_date DATE,
  FOREIGN KEY (vehicle_id) REFERENCES vehicles(id)
);
