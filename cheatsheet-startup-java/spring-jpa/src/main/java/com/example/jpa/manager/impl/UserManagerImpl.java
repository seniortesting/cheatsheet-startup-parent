package com.example.jpa.manager.impl;

import java.util.stream.Collectors;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import com.example.jpa.entity.SysUserEntity;
import com.example.jpa.manager.UserManager;
import com.example.jpa.repository.UserRepository;
import lombok.RequiredArgsConstructor;


@RequiredArgsConstructor
@Service
public class UserManagerImpl implements UserManager {

    private final UserRepository userRepository;

    @Override public Page<SysUserEntity> getSysUserPage(final int pageNum, final int pageSize) {

        final PageRequest pageRequest = PageRequest
                .of(pageNum - 1, pageSize, Sort.by(Sort.Order.desc("time_created")));

        final Page<SysUserEntity> page = userRepository.findAll(pageRequest);

        return new PageImpl<>(page.get().collect(Collectors.toList()), page.getPageable(), page.getTotalElements());
    }
}
