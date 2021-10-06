import React, { useEffect, useState } from "react"
import { ProfileContainer, ResetButton} from './styles'
import ProfileCard from "../ProfileCard"
import ProfileButton from "../ProfileButton"
import * as api from "../constants"

export default function HomeScreen() {
    const [profile, setProfile] = useState({});
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getNewProfile();
    }, []);

    function getNewProfile() {
        setIsLoading(true);
        api
            .getProfiles()
            .then((response) => {
                setProfile(response.data.profile);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(true);
            });
    }

    function choosePerson(choice) {
        if (!isLoading && profile) {
            api.choosePerson(profile.id, choice);
            getNewProfile();
        }
    }

    async function ResetMatches() {
        await api.clear();
        getNewProfile();
    }

    let profileInfo, footerBtns;
    if (profile) {
        profileInfo = isLoading ? (
            <h2>Loading...</h2>
        ) : (
            <ProfileCard {...profile} />
        );
        footerBtns = (
            <>
                <ProfileButton text='Curti'choose={() => choosePerson(true)}/>
                <ProfileButton text="Não curti" choose={() => choosePerson(false)} />
            </>
        );
    } else {
        profileInfo = <div>Fim</div>;
        footerBtns = <ResetButton onClick={ResetMatches}>Resetar</ResetButton>
    }

    return (
        <ProfileContainer>
            {profileInfo}
            <div>
                {footerBtns}
            </div>
        </ProfileContainer>
    );
}
