const AmmoHeader = ({ search, handleSearch }) => {
    return (
        <div className="ammo-list_header">
            <div className="ammo-list_header_searchBar">
                <div className="ammo-list_header_searchBar_wrapper">
                    <input
                        className="ammo-list_header_searchBar_input"
                        placeholder="Enter the name of the ammo"
                        value={search}
                        onChange={handleSearch}
                    ></input>
                    <div className="ammo-list_header_searchBar_searchBtn">
                        <svg
                            id="loupeIco"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clip-path="url(#clip0_4498_12066)">
                                <path
                                    d="M12.9167 11.6667H12.2583L12.025 11.4417C12.8417 10.4917 13.3333 9.25833 13.3333 7.91667C13.3333 4.925 10.9083 2.5 7.91667 2.5C4.925 2.5 2.5 4.925 2.5 7.91667C2.5 10.9083 4.925 13.3333 7.91667 13.3333C9.25833 13.3333 10.4917 12.8417 11.4417 12.025L11.6667 12.2583V12.9167L15.8333 17.075L17.075 15.8333L12.9167 11.6667ZM7.91667 11.6667C5.84167 11.6667 4.16667 9.99167 4.16667 7.91667C4.16667 5.84167 5.84167 4.16667 7.91667 4.16667C9.99167 4.16667 11.6667 5.84167 11.6667 7.91667C11.6667 9.99167 9.99167 11.6667 7.91667 11.6667Z"
                                    fill="var(--colors-tarkovYellow-50)"
                                ></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_4498_12066">
                                    <rect
                                        width="20"
                                        height="20"
                                        fill="white"
                                    ></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="ammo-list_header_buttons_wrapper">
                <button id="damage" className="ammo-list_header_buttons_damage">
                    Damage
                    {/* <svg
                        className=" ammo-arrow-icon ammo-arrow-icon_hidden "
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 5L5 0L10 5H0Z"
                            fill="var(--colors-kmrBlack-50)"
                        ></path>
                    </svg> */}
                </button>
                <button
                    id="armorPenetration"
                    className="ammo-list_header_buttons_penetration"
                >
                    Penetration
                    {/* <svg
                        className=" ammo-arrow-icon ammo-arrow-icon_hidden "
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 5L5 0L10 5H0Z"
                            fill="var(--colors-kmrBlack-50)"
                        ></path>
                    </svg> */}
                </button>
                <button
                    id="armorFrag"
                    className="ammo-list_header_buttons_frag"
                >
                    Frag
                    {/* <svg
                        className=" ammo-arrow-icon ammo-arrow-icon_hidden "
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 5L5 0L10 5H0Z"
                            fill="var(--colors-kmrBlack-50)"
                        ></path>
                    </svg> */}
                </button>
                <button id="recoil" className="ammo-list_header_buttons_recoil">
                    Recoil
                    {/* <svg
                        className=" ammo-arrow-icon ammo-arrow-icon_hidden "
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 5L5 0L10 5H0Z"
                            fill="var(--colors-kmrBlack-50)"
                        ></path>
                    </svg> */}
                </button>
                <button
                    id="accuracy"
                    className="ammo-list_header_buttons_accuracy"
                >
                    Accuracy
                    {/* <svg
                        className=" ammo-arrow-icon ammo-arrow-icon_hidden "
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 5L5 0L10 5H0Z"
                            fill="var(--colors-kmrBlack-50)"
                        ></path>
                    </svg> */}
                </button>
                <button id="speed" className="ammo-list_header_buttons_speed">
                    Speed
                    {/* <svg
                        className=" ammo-arrow-icon ammo-arrow-icon_hidden "
                        width="10"
                        height="5"
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 5L5 0L10 5H0Z"
                            fill="var(--colors-kmrBlack-50)"
                        ></path>
                    </svg> */}
                </button>
            </div>
        </div>
    );
};

export default AmmoHeader;
