
CREATE DATABASE maple
  DEFAULT CHARACTER SET = 'utf8mb4';

use maple;

CREATE TABLE IF NOT EXISTS component_meta(
  id VARCHAR(36) NOT NULL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  icon VARCHAR(255),
  description TEXT,
  tag VARCHAR(255),
  slots VARCHAR(1024),
  created_user_id VARCHAR(36),
  latest_updated_user_id VARCHAR(36),
  created_time DATETIME,
  latest_updated_time DATETIME,
  deleted TINYINT(1) DEFAULT 0
) CHARACTER SET utf8mb4;

CREATE TABLE IF NOT EXISTS prop_meta(  
  id VARCHAR(36) NOT NULL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type TINYINT NOT NULL,
  required TINYINT NOT NULL DEFAULT 0,
  parent_id VARCHAR(36),
  component_meta_id VARCHAR(36),
  created_user_id VARCHAR(36),
  latest_updated_user_id VARCHAR(36),
  created_time DATETIME,
  latest_updated_time DATETIME,
  deleted TINYINT(1) DEFAULT 0,
  INDEX USING BTREE (deleted, component_meta_id)
) CHARACTER SET utf8mb4;

CREATE TABLE IF NOT EXISTS page(
  id VARCHAR(36) NOT NULL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  icon VARCHAR(255) NOT NULL,
  description TEXT,
  width INT,
  height INT,
  model TEXT,
  url VARCHAR(255),
  app_id VARCHAR(36),
  created_user_id VARCHAR(36),
  latest_updated_user_id VARCHAR(36),
  created_time DATETIME,
  latest_updated_time DATETIME,
  deleted TINYINT(1) DEFAULT 0,
  INDEX USING BTREE (deleted, app_id, latest_updated_time)
) CHARACTER SET utf8mb4;

CREATE TABLE IF NOT EXISTS app(
  id VARCHAR(36) NOT NULL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  icon VARCHAR(255) NOT NULL,
  description TEXT,
  create_user_id VARCHAR(36),
  latest_updated_user_id VARCHAR(36),
  created_time DATETIME,
  latest_updated_time DATETIME,
  deleted TINYINT(1) DEFAULT 0,
  INDEX USING BTREE (deleted, latest_updated_time)
) CHARACTER SET utf8mb4;