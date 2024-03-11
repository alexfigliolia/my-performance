import type { ChangeEvent, FormEvent } from "react";
import React, { Fragment, memo, useCallback } from "react";
import { createUseState } from "@figliolia/react-galena";
import { BrandButton } from "Components/Gradients";
import { DropDown, Input } from "Components/Inputs";
import { TriangleLoader } from "Components/Loaders";
import { PanelForm } from "Components/Modals";
import { Modals, useModals } from "State/Modals";
import type { PropLess } from "Types/React";
import { AddUserModel } from "./Model";

const State = new AddUserModel();
const useModel = createUseState(State);

export const AddUser = memo(
  function AddUser(_: PropLess) {
    const name = useModel(state => state.name);
    const role = useModel(state => state.role);
    const email = useModel(state => state.email);
    const loading = useModel(state => state.loading);
    const visible = useModals(state => state.userCreation);

    const close = useCallback(() => {
      Modals.createUserToggle.close();
    }, []);

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      switch (name) {
        case "newUserName":
          return State.set("name", value);
        case "newUserEmail":
          return State.set("email", value);
      }
    }, []);

    const onSelectRole = useCallback((values: Set<string>) => {
      const value = Array.from(values)[0] || "";
      State.set("role", value);
    }, []);

    const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      void State.createUser();
    }, []);

    return (
      <PanelForm
        visible={visible}
        title="New Teammate"
        close={close}
        onSubmit={onSubmit}
        detail="When adding teammates, their performance statistics will begin aggregating automatically">
        <Fragment>
          <Input
            type="text"
            label="Name"
            value={name}
            autoComplete="off"
            name="newUserName"
            onChange={onChange}
          />
          <Input
            type="email"
            label="Email"
            value={email}
            autoComplete="off"
            name="newUserEmail"
            onChange={onChange}
          />
          <DropDown
            id="newEngineerRole"
            value={new Set([role])}
            onChange={onSelectRole}
            label="What's this person's role?"
            options={["Engineer", "Manager", "Administrator"]}
          />
          <BrandButton text="Create" loading={loading}>
            <TriangleLoader ID="addUserLoader" />
          </BrandButton>
        </Fragment>
      </PanelForm>
    );
  },
  () => true,
);
