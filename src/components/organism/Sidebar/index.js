import React from 'react'
import { Menu } from '../../../components'
import { Submenu } from '../../atoms'
const Sidebar = () => {
    return (
        <>
            <div class="app-sidebar sidebar-shadow">
                <div class="app-header__mobile-menu">
                    <div>
                        <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>
                <div class="app-header__menu">
                    <span>
                        <button type="button"
                            class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                            <span class="btn-icon-wrapper">
                                <i class="fa fa-ellipsis-v fa-w-6"></i>
                            </span>
                        </button>
                    </span>
                </div>
                <div class="scrollbar-sidebar">
                    <div class="app-sidebar__inner">
                        <ul class="vertical-nav-menu">
                            <Menu title="Dashboard" />
                            <Submenu
                                title="Dashboard"
                                url="/"
                                icon="pe-7s-rocket"
                                is_active="mm-active" />
                            <Menu title="Peminjaman" />
                            <li>
                                <a href="#">
                                    <i class="metismenu-icon pe-7s-diamond"></i>
                                    Peminjaman
                                    <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </a>
                                <ul>
                                    <Submenu
                                        title="Pinjam Alat"
                                        url="login" />
                                </ul>
                            </li>
                            <Menu title="Konfirmasi" />
                            <Menu title="Alat" />
                            <Menu title="Pengguna" />
                            <Menu title="Akun" />
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sidebar
