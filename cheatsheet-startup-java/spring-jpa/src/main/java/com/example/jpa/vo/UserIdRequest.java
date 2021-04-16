package com.example.jpa.vo;

import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotNull;

@Builder
@Data
public class UserIdRequest {

    @NotNull(message = "userid不能为空")
    private Long userId;
}
