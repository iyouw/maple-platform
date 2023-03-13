package com.maple.app.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.maple.app.dao.ComponentMetaDao;
import com.maple.app.dao.PropMetaDao;
import com.maple.app.entity.ComponentMeta;
import com.maple.app.util.PropMetaHelper;

@Service
public class ComponentMetaService {
  private ComponentMetaDao componentMetaDao;
  private PropMetaDao propMetaDao;

  public ComponentMetaService(ComponentMetaDao componentMetaDao, PropMetaDao propMetaDao) {
    this.componentMetaDao = componentMetaDao;
    this.propMetaDao = propMetaDao;
  }

  public ArrayList<ComponentMeta> getList() {
    return componentMetaDao.getList();
  }

  public ComponentMeta get(UUID id) {
    var res = componentMetaDao.get(id);
    var propMetas = propMetaDao.getByComponentMetaId(id);
    if (res != null && propMetas != null) {
      res.setPropMetas(propMetas);
    }
    return res;
  }

  @Transactional
  public UUID upsert(ComponentMeta componentMeta) {
    var res = componentMeta.getId() == null ? add(componentMeta) : update(componentMeta);
    return res;
  }

  @Transactional
  public UUID add(ComponentMeta componentMeta) {
    var id = UUID.randomUUID();
    componentMeta.setId(id);
    var now = LocalDateTime.now();
    componentMeta.setCreatedTime(now);
    componentMeta.setLatestUpdatedTime(now);
    var propMetas = PropMetaHelper.flatAndFormat(componentMeta.getPropMetas(), id, now);
    if (propMetas.size() > 0) propMetaDao.addList(propMetas);
    componentMetaDao.add(componentMeta);
    return id;
  }

  @Transactional
  public UUID update(ComponentMeta componentMeta) {
    var id = componentMeta.getId();
    var now = LocalDateTime.now();
    componentMeta.setLatestUpdatedTime(now);
    propMetaDao.deleteByComponentMetaId(id);
    var propMetas = PropMetaHelper.flatAndFormat(componentMeta.getPropMetas(), id, now);
    if (propMetas.size() > 0) propMetaDao.addList(propMetas);
    componentMetaDao.update(componentMeta);
    return id;
  }

  public Boolean delete(UUID id) {
    return componentMetaDao.delete(id) > 0;
  }

  public Boolean deleteByIds(List<UUID> ids) {
    return componentMetaDao.deleteByIds(ids) > 0;
  }
}
