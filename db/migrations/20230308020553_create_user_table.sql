-- migrate:up
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  password VARCHAR(200) NOT NULL,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(200) NOT NULL,
  phone_number VARCHAR(200) NOT NULL,
  address VARCHAR(3000) NOT NULL,
  birth VARCHAR(200) NOT NULL,
  gender VARCHAR(50) NOT NULL,
  point DECIMAL(12, 2) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

-- migrate:down
DROP TABLE users;
