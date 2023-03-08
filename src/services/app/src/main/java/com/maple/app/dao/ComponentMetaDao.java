package com.maple.app.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import com.maple.app.entity.ComponentMeta;

public interface ComponentMetaDao {
  ArrayList<ComponentMeta> getList();
  ComponentMeta getById(UUID id);
  Integer add(ComponentMeta meta);
  Integer update(ComponentMeta meta);
  Integer deleteById(UUID id);
  Integer deleteByIds(List<UUID> ids);
}
