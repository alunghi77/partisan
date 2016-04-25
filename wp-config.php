<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'partisan_wp_001');

/** MySQL database username */
define('DB_USER', 'partisan_admin');

/** MySQL database password */
define('DB_PASSWORD', 'chinese luxury flats');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '(cvT%vuKIIN-bFHE<p_DV<Jgs|-c>axvRtMngKVqa%(%pg{BK_vI.TY&d*f|NeQ1');
define('SECURE_AUTH_KEY',  '3$oX3o_+Tt|I#b?uz2zq!TI`,P9H~MV;V=4/I}<%1JTe@S_-+nQk.Xt;v;|K3|%Y');
define('LOGGED_IN_KEY',    'i3v#jn8N8~O/xZ8{.![-9r@{?B }.Tirg}(AOgd/ ~w[L61dTYhU{ErcS4a+-/p}');
define('NONCE_KEY',        'A(]5{k^<,X(ct,}IjZ}ys}?}PbP3A~=jl-lAc#KO>$VjGb`m;3j[~-2CFL/Ey$.>');
define('AUTH_SALT',        'CyG(4?%ya:m4~J{YKq~Ih(#[>1@gkL+CLK9+B``z[Z8PkNj$!cF|0DB#Qa/fbY_p');
define('SECURE_AUTH_SALT', '(BD1?/$|-lta+.wpU}LEADv0+~#J`eZ:OmgX_H{=}-d_N1V<tgo2|Qe.4+}d(B6}');
define('LOGGED_IN_SALT',   '[c{kWFKd75v^$SLNetP<#M*:ficl#,}:` Z-9FHaR;>RNgEg^cB,=.|yLw/j2D`k');
define('NONCE_SALT',       'L4$3(u-sT@Z_;D3yjn&Z7Qg71_LZ-ZdV{xB-ABC$2A6`<5/FI|5-})s|7k 8.NCV');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
