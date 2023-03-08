package com.maple.app.dao;

import java.util.List;
import java.util.UUID;

import com.maple.app.entity.PropMeta;

public interface PropMetaDao {
  Integer addList(List<PropMeta> propMetas);
  List<PropMeta> getByComponentMetaId(UUID componentMetaId);
  Integer deleteByComponentMetaId(UUID componentMetaId);
}
