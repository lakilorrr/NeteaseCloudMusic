import styled from 'styled-components'
import foot_enter_new from '@/assets/img/foot_enter_new.png'
import foot_enter_tt from '@/assets/img/foot_enter_tt.png'

export const FooterWrapper = styled.div`
    height: 172px;
    background-color: #f2f2f2;
    color: #666;
    border-top: 1px solid #d3d3d3;

    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export const FooterLeft = styled.div`
    padding-top: 15px;
    line-height: 24px;

    .link {
        a {
            color: #999;
        }

        .line {
            margin: 0 10px;
            color: #999;
        }
    }

    .copyright > span,
    .report > span,
    .info > a {
        margin-right: 15px;
    }
`

export const FooterRight = styled.ul`
    display: flex;
    width: 420px;
    margin-top: 33px;

    .item {
        width: 60px;
        height: 70px;
        margin-left: 30px;
        text-align: center;
        color: #666;

        .link {
            display: block;
            width: 50px;
            height: 45px;
            background: url(${foot_enter_new}) no-repeat;
            background-size: 110px 552px;
            margin: 0 auto;
        }

        .logo-amped {
            background-position: -63px -456.5px;
        }
        .logo-auth {
            background-position: -63px -101px;
        }
        .logo-musician {
            background-position: 0 0;
        }
        .logo-reward {
            background-position: -60px -50px;
        }
        .logo-cash {
            background-position: 0 -101px;
        }

        .title {
            display: inline-block;
            margin: 5px 5px 0;
            width: 52px;
            height: 14px;
            background-image: url(${foot_enter_tt});
            background-size: 180px 139px;
        }

        .tt-amped {
            background-position: 0 -108px;
            margin-left: -6px;
            width: 72px;
        }
        .tt-auth {
            background-position: -1px -91px;
        }
        .tt-musician {
            background-position: 0 0;
        }
        .tt-reward {
            background-position: 0 -54px;
        }

        .tt-cash {
            background-position: -1px -72px;
        }
    }
`
