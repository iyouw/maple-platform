package com.maple.app.entity;

import java.util.ArrayList;

import com.maple.app.infra.EntityBase;

public class ComponentMeta extends EntityBase<String> {
  private String name;
  private String icon;
  private String description;
  private String tag;
  private String slots;

  private ArrayList<PropMeta> props;

  public ComponentMeta() {
    this.props = new ArrayList<PropMeta>();
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

  public ArrayList<PropMeta> getProps() {
    return this.props;
  }

  public void setProps(ArrayList<PropMeta> props) {
    this.props = props;
  }

  public void addProp(PropMeta prop) {
    this.props.add(prop);
  }
}