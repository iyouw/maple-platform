package com.maple.app.entity;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import com.maple.app.infra.EntityBase;

public class ComponentMeta extends EntityBase<UUID> {
  private String name;
  private String icon;
  private String description;
  private String tag;
  private String slots;

  private List<PropMeta> propMetas;

  public ComponentMeta() {
    this.propMetas = new ArrayList<PropMeta>();
  }

  public String getName() {
    return this.name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getIcon() {
    return this.icon;
  }

  public void setIcon(String icon) {
    this.icon = icon;
  }

  public String getDescription() {
    return this.description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getTag() {
    return this.tag;
  }

  public void setTag(String tag) {
    this.tag = tag;
  }

  public String getSlots() {
    return this.slots;
  }

  public void setSlots(String slots) {
    this.slots = slots;
  }

  public List<PropMeta> getPropMetas() {
    return this.propMetas;
  }

  public void setPropMetas(List<PropMeta> propMetas) {
    this.propMetas = propMetas;
  }
}