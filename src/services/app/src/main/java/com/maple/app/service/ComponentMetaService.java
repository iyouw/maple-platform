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
import com.maple.app.entity.PropMeta;

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

  public ComponentMeta getById(UUID id) {
    var res = componentMetaDao.getById(id);
    var propMetas = propMetaDao.getByComponentMetaId(id);
    if (res != null && propMetas != null) {
      res.setPropMetas(propMetas);
    }
    return res;
  }

  @Transactional
  public Boolean add(ComponentMeta componentMeta) {
    var uid = UUID.randomUUID();
    componentMeta.setId(uid);
    var now = LocalDateTime.now();
    componentMeta.setCreatedTime(now);
    componentMeta.setLatestUpdatedTime(now);
    var propMetas = normalizePropMeta(componentMeta.getPropMetas(), uid, now);
    if (propMetas.size() > 0) propMetaDao.addList(propMetas);
    return componentMetaDao.add(componentMeta) > 0;
  }

  @Transactional
  public Boolean update(ComponentMeta componentMeta) {
    var uid = componentMeta.getId();
    var now = LocalDateTime.now();
    componentMeta.setLatestUpdatedTime(now);
    propMetaDao.deleteByComponentMetaId(uid);
    var propMetas = normalizePropMeta(componentMeta.getPropMetas(), uid, now);
    if (propMetas.size() > 0) propMetaDao.addList(propMetas);
    return componentMetaDao.update(componentMeta) > 0;
  }

  public Boolean deleteById(UUID id) {
    return componentMetaDao.deleteById(id) > 0;
  }

  public Boolean deleteByIds(List<UUID> ids) {
    return componentMetaDao.deleteByIds(ids) > 0;
  }

  private List<PropMeta> normalizePropMeta(List<PropMeta> propMetas, UUID componentMetaId, LocalDateTime now) {
    var res = new ArrayList<PropMeta>();
    normalizeCore(res, propMetas, componentMetaId, now, null);
    return res;
  }

  private void normalizeCore(List<PropMeta> des, List<PropMeta> src, UUID componentMetaId, LocalDateTime now, UUID parentId) {
    for(var propMeta : src) {
      var pid = UUID.randomUUID();
      propMeta.setId(pid);
      propMeta.setComponentMetaId(componentMetaId);
      propMeta.setCreatedTime(now);
      propMeta.setLatestUpdatedTime(now);

      des.add(propMeta);

      var children = propMeta.getChildren();
      if(children != null && children.size() > 0){
        normalizeCore(des, children, componentMetaId, now, pid);
      }
    }
  }
}
