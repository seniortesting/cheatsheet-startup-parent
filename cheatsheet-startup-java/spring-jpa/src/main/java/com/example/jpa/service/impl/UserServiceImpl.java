package com.example.jpa.service.impl;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import javax.persistence.criteria.Predicate;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import com.example.jpa.entity.SysRoleEntity;
import com.example.jpa.entity.SysUserEntity;
import com.example.jpa.repository.UserRepository;
import com.example.jpa.repository.UserRoleRepository;
import com.example.jpa.service.UserService;
import lombok.AllArgsConstructor;


@AllArgsConstructor
@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;
    private UserRoleRepository roleRepository;

    @Override
    public List<SysUserEntity> getAllUsers() {
        // 单表where查询
        Specification<SysUserEntity> sysUserEntitySpecification = (root, query, criteriaBuilder) -> {
            List<Predicate> list = new LinkedList<>();

            list.add(criteriaBuilder.equal(root.get("id"), "1214769213920542722"));

            return criteriaBuilder.and(list.toArray(new Predicate[list.size()]));
        };
        final PageRequest pageRequest = PageRequest
                .of(0, 20, Sort.by(Sort.Order.desc("createTime"), Sort.Order.desc("id")));
        final Page<SysUserEntity> sysUsers = userRepository.findAll(sysUserEntitySpecification, pageRequest);
        final List<SysUserEntity> sysUsersContent = sysUsers.getContent();
        return sysUsersContent;
    }

    @Override
    public List<SysRoleEntity> findUserRolesByUserId(final Long userId) {
        final List<Object[]> sysRoleEntities = roleRepository.queryUserRoleByUserId(userId);
        final List<SysRoleEntity> roleEntities = packageResult(sysRoleEntities);
        return roleEntities;
    }

    /**
     * @param sysRoleEntities
     * @return
     */
    private List<SysRoleEntity> packageResult(List<Object[]> sysRoleEntities) {
        if (CollectionUtils.isEmpty(sysRoleEntities)) {
            return null;
        }
        List<SysRoleEntity> roleEntities = new ArrayList<>(sysRoleEntities.size());
        if (null != sysRoleEntities && !sysRoleEntities.isEmpty()) {
            for (Object[] rule : sysRoleEntities) {
                Long id = rule[0] == null ? 0 : Long.valueOf(rule[0].toString());
                String roleCode = rule[1] == null ? "" : rule[1].toString();
                String roleName = rule[2] == null ? "" : rule[2].toString();

                SysRoleEntity sysRoleEntity = new SysRoleEntity();
                sysRoleEntity.setId(id);
                sysRoleEntity.setRoleCode(roleCode);
                sysRoleEntity.setRoleName(roleName);
                roleEntities.add(sysRoleEntity);
            }
        }
        return roleEntities;
    }
}
