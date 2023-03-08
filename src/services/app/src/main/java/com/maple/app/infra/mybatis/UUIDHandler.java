package com.maple.app.infra.mybatis;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.UUID;

import org.apache.ibatis.type.BaseTypeHandler;
import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.MappedJdbcTypes;


@MappedJdbcTypes(JdbcType.VARCHAR)
public class UUIDHandler extends BaseTypeHandler<UUID> {
  @Override
  public void setNonNullParameter(PreparedStatement ps, int i, UUID parameter, JdbcType jdbcType) throws SQLException {
    ps.setString(i, parameter.toString());
  }

  @Override
  public UUID getNullableResult(ResultSet rs, String columnName) throws SQLException, IllegalArgumentException {
    var str = rs.getString(columnName);
    return str == null ? null : UUID.fromString(str);
  }

  @Override
  public UUID getNullableResult(ResultSet rs, int columnIndex) throws SQLException {
    var str = rs.getString(columnIndex);
    return str == null ? null : UUID.fromString(str);
  }

  @Override
  public UUID getNullableResult(CallableStatement cs, int columnIndex) throws SQLException {
    var str = cs.getString(columnIndex);
    return str == null ? null : UUID.fromString(str);
  }
}
