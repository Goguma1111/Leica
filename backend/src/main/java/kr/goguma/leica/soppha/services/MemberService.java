package kr.goguma.leica.soppha.services;

import java.util.List;

import kr.goguma.leica.soppha.models.NewMember;


public interface MemberService {

    /** 일별 가입자 수 */
    List<NewMember> getDailyNewMembers();

    /** 주간 가입자 수  */
    List<NewMember> getWeeklyNewMembers();

    void insertDailyNewMembers();

}
