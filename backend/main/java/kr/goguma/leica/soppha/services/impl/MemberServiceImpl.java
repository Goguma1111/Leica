package kr.goguma.leica.soppha.services.impl;

import java.util.List;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import kr.goguma.leica.soppha.models.NewMember;
import kr.goguma.leica.soppha.services.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import kr.goguma.leica.soppha.mapper.MemberMapper;

@Slf4j
@Service
@RequiredArgsConstructor
@Primary
public class MemberServiceImpl implements MemberService {

    private final MemberMapper memberMapper;

    @Override
    public List<NewMember> getDailyNewMembers() {
        return memberMapper.getDailyNewMembers();
    }

    @Override
    public List<NewMember> getWeeklyNewMembers() {
        return memberMapper.getWeeklyNewMembers();
    }

    @Override
    public void insertDailyNewMembers() {
        memberMapper.insertMember();
    }
}
