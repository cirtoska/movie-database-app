import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncFetchPerson } from "../../utilities/actions";
import { useNavigate, useParams } from "react-router-dom";
import ContentWrapper from "../../layouts/ContentWraper/ContentWrapper";
import SplitColumn from "../../layouts/SplitColumn/SplitColumn";
import PersonSidebar from "./PersonSidebar";
import WhiteColumn from "../../layouts/WhiteColumn/WhiteColumn";
import PersonContent from "./PersonContent";

const Person = () => {
  const dispatch = useDispatch();
  const person = useSelector((state) => state.person);
  const load = useSelector((state) => state.load);
  const navigate = useNavigate();
  const param = useParams();

  useEffect(() => {
    dispatch(asyncFetchPerson(param.id));
  }, [dispatch, param.id]);

  useEffect(() => {
    document.title = load ? person.name : "Movies - Library";
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [person]);

  console.log("person", person);

  return (
    <ContentWrapper>
      <SplitColumn>
        <PersonSidebar {...person} />
      </SplitColumn>
      <WhiteColumn>
        <PersonContent {...person} />
      </WhiteColumn>
    </ContentWrapper>
  );
};

export default Person;
