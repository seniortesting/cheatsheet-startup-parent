package com.example.jpa.controller;

import java.util.List;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.jpa.entity.SysRoleEntity;
import com.example.jpa.entity.SysUserEntity;
import com.example.jpa.service.UserService;
import com.example.jpa.vo.UserIdRequest;
import lombok.AllArgsConstructor;


@AllArgsConstructor
@RequestMapping("/user")
@RestController
public class SysUserController {

    private UserService userService;

    /**
     * 获取所有的用户
     *
     * @return
     */
    @PostMapping(value = "/list")
    public List<SysUserEntity> getAllSysUsers() {
        final List<SysUserEntity> allUsers = userService.getAllUsers();
        return allUsers;
    }

    /**
     * 根据用户的id获取用户的角色
     *
     * @param userIdRequest
     * @return
     */
    @PostMapping(value = "/list/id")
    public List<SysRoleEntity> getRolesByUserId(@RequestBody UserIdRequest userIdRequest) {
        final List<SysRoleEntity> userRolesByUserId = userService.findUserRolesByUserId(userIdRequest.getUserId());
        return userRolesByUserId;
    }
}
