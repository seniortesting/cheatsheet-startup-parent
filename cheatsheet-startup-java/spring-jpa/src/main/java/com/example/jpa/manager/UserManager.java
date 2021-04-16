package com.example.jpa.manager;

import org.springframework.data.domain.Page;
import com.example.jpa.entity.SysUserEntity;


public interface UserManager {


    public Page<SysUserEntity> getSysUserPage(final int pageNum, final int pageSize);
}
