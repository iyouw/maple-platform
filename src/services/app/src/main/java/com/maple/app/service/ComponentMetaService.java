package com.maple.app.service;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.maple.app.dao.ComponentMetaDao;
import com.maple.app.entity.ComponentMeta;

@Component
public class ComponentMetaService {
  @Autowired
  private ComponentMetaDao componentMetaDao;

  public ArrayList<ComponentMeta> getAllComponentMetas() {
    return componentMetaDao.getAllComponentMetas();
  }

  public ComponentMeta getComponentMetaById(UUID id) {
    return componentMetaDao.getComponentMetaById(id.toString());
  }

  public Boolean addComponentMeta(ComponentMeta componentMeta) {
    return componentMetaDao.addComponentMeta(componentMeta) > 0;
  }

  public Boolean deleteComponentMetaById(UUID id) {
    return componentMetaDao.deleteComponentMetaById(id.toString()) > 0;
  }
}
