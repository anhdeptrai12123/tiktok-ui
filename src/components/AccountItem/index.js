import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/da9787d8d526081c709e9de06202441b~c5_100x100.jpeg?x-expires=1681358400&x-signature=CXovxA%2F3irOPRR2lQfmNrAdI2xI%3D"
                alt="Bao Na"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>acelinebeo</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>chuckitbabi</span>
            </div>
        </div>
    );
}

export default AccountItem;
