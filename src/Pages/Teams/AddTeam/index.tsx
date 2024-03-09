import type { ChangeEvent, FormEvent } from "react";
import React, { Fragment, memo, useCallback, useState } from "react";
import { BrandButton } from "Components/Gradients";
import { Input } from "Components/Inputs";
import { TriangleLoader } from "Components/Loaders";
import { PanelForm } from "Components/Modals";
import { Modals, useModals } from "State/Modals";
import { Team } from "State/Team";
import { Toasts } from "State/Toasts";
import type { PropLess } from "Types/React";

export const AddTeam = memo(
  function AddTeam(_: PropLess) {
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const visible = useModals(state => state.newTeamOpen);

    const close = useCallback(() => {
      Modals.newTeamToggle.close();
    }, []);

    const onSubmit = useCallback(
      (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (name.length < 3) {
          return Toasts.dispatch({
            type: "error",
            title: "Whoops!",
            message: "Please specify a name of at least 3 characters",
          });
        }
        setLoading(true);
        void Team.createTeam(name)
          .then(() => {
            setName("");
            setLoading(false);
          })
          .catch(() => {
            setLoading(false);
            Toasts.dispatch({
              type: "error",
              title: "Network Error",
              message:
                "There was an issue creating your team. Please try again",
            });
          });
      },
      [name],
    );

    const onSetName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    }, []);

    return (
      <PanelForm
        close={close}
        title="New Team"
        visible={visible}
        onSubmit={onSubmit}
        detail="Once your new team is created, you'll be able to add teammates and begin tracking their performance">
        <Fragment>
          <Input
            type="text"
            value={name}
            name="teamName"
            label="Team Name"
            autoComplete="off"
            onChange={onSetName}
          />
          <BrandButton text="Create" loading={loading}>
            <TriangleLoader ID="addTeamLoader" />
          </BrandButton>
        </Fragment>
      </PanelForm>
    );
  },
  () => true,
);
