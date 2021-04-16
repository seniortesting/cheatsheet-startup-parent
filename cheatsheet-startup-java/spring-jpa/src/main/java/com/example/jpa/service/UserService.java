package com.example.jpa.service;

import java.util.List;
import com.example.jpa.entity.SysRoleEntity;
import com.example.jpa.entity.SysUserEntity;


public interface UserService {

    List<SysUserEntity> getAllUsers();

    List<SysRoleEntity> findUserRolesByUserId(Long userId);
}
