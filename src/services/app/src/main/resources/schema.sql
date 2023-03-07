CREATE TABLE component_meta(
  id VARCHAR(36) NOT NULL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  icon VARCHAR(255),
  description TEXT,
  tag VARCHAR(255),
  slots VARCHAR(1024),
  created_user_id VARCHAR(36),
  latest_updated_user_id VARCHAR(36),
  created_time DATETIME,
  latest_updated_time DATETIME
) CHARACTER SET utf8mb4;

CREATE TABLE prop_meta(  
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  type TINYINT NOT NULL,
  required TINYINT NOT NULL DEFAULT 0,
  default_value VARCHAR(255),
  parent_id INT,
  component_meta_id VARCHAR(36),
  created_user_id VARCHAR(36),
  latest_updated_user_id VARCHAR(36),
  created_time DATETIME,
  latest_updated_time DATETIME
) CHARACTER SET utf8mb4;

CREATE Table page(
  id VARCHAR(36) NOT NULL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  icon VARCHAR(255) NOT NULL,
  description TEXT,
  width INT,
  height INT,
  model TEXT,
  url VARCHAR(255),
  created_user_id VARCHAR(36),
  latest_updated_user_id VARCHAR(36),
  created_time DATETIME,
  latest_updated_time DATETIME
) CHARACTER SET utf8mb4;