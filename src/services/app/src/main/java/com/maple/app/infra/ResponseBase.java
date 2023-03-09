package com.maple.app.infra;

public class ResponseBase<T> {
  private static final Long DEFAULT_FAIL_CODE = 1L;
  private static final Long DEFAULT_SUCCESS_CODE = 0L;

  private static final String DEFAULT_SUCCESS_MESSAGE = "success";
  private static final String DEFAULT_FAIL_MESSAGE = "fail";

  public static <T> ResponseBase<T> fail(T data, String message, Long code) {
    return new ResponseBase<T>(data, message, code);
  }

  public static <T> ResponseBase<T> fail(T data, String message) {
    return new ResponseBase<T>(data, message, DEFAULT_FAIL_CODE);
  }

  public static <T> ResponseBase<T> fail(T data) {
    return new ResponseBase<T>(data, DEFAULT_FAIL_MESSAGE, DEFAULT_FAIL_CODE);
  }

  public static <T> ResponseBase<T> success(T data, String message){
    return new ResponseBase<T>(data, message, DEFAULT_SUCCESS_CODE);
  }

  public static <T> ResponseBase<T> success(T data) {
    return new ResponseBase<T>(data, DEFAULT_SUCCESS_MESSAGE, DEFAULT_SUCCESS_CODE);
  }

  private Long code;
  private String msg;
  private T data;

  public ResponseBase(T data, String message, Long code) {
    this.data = data;
    this.msg = message;
    this.code = code;
  }

  public Long getCode() {
    return this.code;
  }

  public void setCode(Long code) {
    this.code = code;
  }

  public String getMsg() {
    return this.msg;
  }

  public void setMsg(String message) {
    this.msg = message;
  }

  public T getData() {
    return this.data;
  }

  public void setData(T data) {
    this.data = data;
  }
}
