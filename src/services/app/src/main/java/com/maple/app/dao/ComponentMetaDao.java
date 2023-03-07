package com.maple.app.dao;

import java.util.ArrayList;

import com.maple.app.entity.ComponentMeta;

public interface ComponentMetaDao {
  ArrayList<ComponentMeta> getAllComponentMetas();
  ComponentMeta getComponentMetaById(String id);
  Integer addComponentMeta(ComponentMeta meta);
  Integer updateComponentMeta(ComponentMeta meta);
  Integer deleteComponentMetaById(String id);
  Integer deleteComponentMetaByIds(String[] ids);
}
