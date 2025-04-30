USE vehicle_booking;

INSERT INTO vehicle_types (name, wheels) VALUES
('Hatchback', 4),
('Sedan', 4),
('SUV', 4),
('Cruiser', 2),
('Sports', 2);

INSERT INTO vehicles (model, vehicle_type_id) VALUES
('Swift', 1),
('City', 2),
('Scorpio', 3),
('Classic 350', 4),
('Duke 200', 5);
