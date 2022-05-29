CREATE TABLE admin.ground_floor(    
   id bigint NOT NULL,    
   name character varying(255),    
	vehicle_no character varying(255),
	available boolean,
	
   PRIMARY KEY ("id")    
); 



INSERT INTO admin.ground_floor (id, available)
VALUES (1, true), (2, true), (3, true), (4, true), (5, true), (6, true), (7, true),
(8, true), (9, true), (10, true), (11, true), (12, true)