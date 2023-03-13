package com.maple.app.util;

import java.util.List;
import java.util.ArrayList;
import java.util.UUID;
import java.time.LocalDateTime;

import  com.maple.app.entity.PropMeta;

public class PropMetaHelper {
  public static List<PropMeta> flatAndFormat(List<PropMeta> propMetas, UUID componentMetaId, LocalDateTime now) {
    var res = new ArrayList<PropMeta>();
    flat(res, propMetas, componentMetaId, now, null);
    return res;
  }

  private static void flat(List<PropMeta> des, List<PropMeta> src, UUID componentMetaId, LocalDateTime now, UUID parentId) {
    for(var propMeta : src) {
      var id = UUID.randomUUID();
      propMeta.setId(id);
      propMeta.setCreatedTime(now);
      propMeta.setLatestUpdatedTime(now);

      propMeta.setComponentMetaId(componentMetaId);
      propMeta.setParentId(parentId);

      des.add(propMeta);

      var children = propMeta.getChildren();
      if(children != null && children.size() > 0){
        flat(des, children, componentMetaId, now, id);
      }
    }
  }
}
